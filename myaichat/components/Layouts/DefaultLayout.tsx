import { PropsWithChildren, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from '../../App';
import Footer from './Footer';
import Header from './Header';

const DefaultLayout = ({ children }: PropsWithChildren) => {
    const [showLoader, setShowLoader] = useState(true);
    const [showTopButton, setShowTopButton] = useState(false);

    const goToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const onScrollHandler = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setShowTopButton(true);
        } else {
            setShowTopButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScrollHandler);

        const screenLoader = document.getElementsByClassName('screen_loader');
        if (screenLoader?.length) {
            setTimeout(() => {
                setShowLoader(false);
            }, 200);
        }

        return () => {
            window.removeEventListener('onscroll', onScrollHandler);
        };
    });

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <App>
            <div>
                {showLoader && (
                    <div className="screen_loader fixed inset-0 z-[60] grid place-content-center bg-[#fafafa] dark:bg-[#060818]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="200px"
                            height="200px"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid"
                        >
                            <circle cx="50" cy="50" r="0" fill="none" stroke="#47bdff" strokeWidth="4">
                                <animate
                                    attributeName="r"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="0;16"
                                    keyTimes="0;1"
                                    keySplines="0 0.2 0.8 1"
                                    calcMode="spline"
                                    begin="0s"
                                ></animate>
                                <animate
                                    attributeName="opacity"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="1;0"
                                    keyTimes="0;1"
                                    keySplines="0.2 0 0.8 1"
                                    calcMode="spline"
                                    begin="0s"
                                ></animate>
                            </circle>
                            <circle cx="50" cy="50" r="0" fill="none" stroke="#b476e5" strokeWidth="4">
                                <animate
                                    attributeName="r"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="0;16"
                                    keyTimes="0;1"
                                    keySplines="0 0.2 0.8 1"
                                    calcMode="spline"
                                    begin="-0.5s"
                                ></animate>
                                <animate
                                    attributeName="opacity"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="1;0"
                                    keyTimes="0;1"
                                    keySplines="0.2 0 0.8 1"
                                    calcMode="spline"
                                    begin="-0.5s"
                                ></animate>
                            </circle>
                        </svg>
                    </div>
                )}

                <div className="flex min-h-screen flex-col bg-white bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9] font-mulish text-base font-normal text-gray antialiased dark:bg-[#101926] dark:from-transparent dark:to-transparent">
                    <Header className="sticky-header" />

                    <div className="-mt-[82px] flex-grow overflow-x-hidden lg:-mt-[106px]">{children}</div>
                    <Footer />
                </div>
            </div>
        </App>
    );
};

export default DefaultLayout;
