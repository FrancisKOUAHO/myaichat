import Link from 'next/link';

import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';

    const { translations } = useLanguage();

    return (
        <section className="mobile pt-20 lg:pt-[106px]">
            <div className="container mt-[70px] lg:mt-[150px]">
                <div className="relative text-center">
                    <div className="mx-auto w-full px-4 lg:w-4/5">
                        <h2 className="text-[40px] font-extrabold leading-normal text-white sm:text-[40px] lg:text-[40px] lg:leading-[64px]">
                            <span>
                                {translations.home.content}
                                <br></br>
                            </span>
                            <span>{translations.home.subContent}</span>
                        </h2>
                        <div className="mx-auto text-center">
                            <p className="my-8 text-lg text-white">{translations.home.subContent2}</p>
                            <Link
                                href="https://app.myaichat.io/"
                                className="duration-50 border-pink-500 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 inline-block h-[50px] transform space-x-3 !rounded-lg rounded-md border bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] !px-11 !py-3 px-3 py-2 text-base font-semibold leading-6 text-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] transition-transform hover:bg-[linear-gradient(76.35deg,_#660AC2_15.89%,_#850AC2_89.75%)] focus:bg-[linear-gradient(76.35deg,_#4D0891_15.89%,_#630891_89.75%)] focus:outline-none focus-visible:ring-2 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {translations.home.button}
                            </Link>
                        </div>
                    </div>
                    <div
                        className="mt-[50px] w-full pb-7 lg:mt-[120px] lg:pb-0"
                        style={{
                            boxShadow: '0 17px 17px rgba(40, 97, 230, 0.08)',
                        }}
                    >
                        <video className="h-auto w-full max-w-full" autoPlay loop muted controls>
                            <source src="/assets/videos/demo-myaichat.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
