import Link from "next/link";

import {useSelector} from "react-redux";
import {IRootState} from "../../store";
import { useLanguage } from '../../contexts/LanguageContext'

const Hero = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';

    const {translations} = useLanguage();

    return (
        <section
            className="pt-20 lg:pt-[106px] mobile"
            style={{
                // background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
            }}
        >
            <div className="container mt-[70px] lg:mt-[150px]">
                <div className="relative text-center">
                    <div className="mx-auto w-full px-4 lg:w-4/5">
                        <h2 className="text-[40px] font-extrabold leading-normal sm:text-[40px] lg:text-[40px] lg:leading-[64px] text-white">
                            <span>{translations.home.content}<br></br></span>
                            <span>{translations.home.subContent}</span>
                        </h2>
                        <div className="text-center mx-auto">
                            <p className="my-8 text-lg text-white">
                                {translations.home.subContent2}
                            </p>
                            <Link href="https://app.myaichat.io/"
                                  className="inline-block border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 border-pink-500 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 py-2 px-3 rounded-md text-base leading-6 space-x-3 !rounded-lg !py-3 !px-11 h-[50px] text-white font-semibold shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] hover:bg-[linear-gradient(76.35deg,_#660AC2_15.89%,_#850AC2_89.75%)] focus:bg-[linear-gradient(76.35deg,_#4D0891_15.89%,_#630891_89.75%)]">
                                {translations.home.button}
                            </Link>
                        </div>
                    </div>
                    <div className="w-full pb-7 lg:pb-0 mt-[50px] lg:mt-[120px]">
                        <video className="w-full max-w-full h-auto" autoPlay loop muted controls>
                            <source src="/assets/videos/myAiChat.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>
            </div>
        </section>


    )
}

export default Hero



