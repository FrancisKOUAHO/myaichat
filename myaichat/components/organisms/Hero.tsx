import Link from "next/link";

import {useSelector} from "react-redux";
import {IRootState} from "../../store";

const Hero = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';

    return (
        <section
            className="bg-black bg-[url(/assets/images/modern-saas/banner-bg.png)] bg-cover bg-top bg-no-repeat pt-[82px] lg:pt-[106px] mobile"
            style={{
                background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
                height: '95vh',
            }}
        >
            <div className="container lg:pt-7">
                <div className="relative">
                    <div
                        className="pt-14 pb-8 mt-[90px] text-center text-white lg:w-3/5 lg:py-20 ltr:lg:text-left rtl:lg:text-right">
                        <h2 className="text-xl font-extrabold leading-normal sm:text-1xl lg:text-[40px] lg:leading-[64px]">
                            <span className="text-white">Boostez Vos Ventes : Jusqu'à 35%<br></br></span>
                            <span className="text-white">de Conversion avec notre Chatbot</span>
                        </h2>
                        <p className="my-8 text-lg lg:w-3/4 text-white">
                            Un Guide d'Achat Personnalisé pour Chaque Visiteur
                        </p>
                        <Link href="https://app.myaichat.io/"
                              className="border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 border-pink-500 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 py-2 px-3 rounded-md text-base leading-6 space-x-3 !rounded-lg !py-3 !px-11 h-[50px] text-white font-semibold shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] hover:bg-[linear-gradient(76.35deg,_#660AC2_15.89%,_#850AC2_89.75%)] focus:bg-[linear-gradient(76.35deg,_#4D0891_15.89%,_#630891_89.75%)]">
                            Essayez le chatbot maintenant
                        </Link>
                    </div>
                    <div
                        className="top-[70px] w-full pb-7 ltr:right-0 rtl:left-0 rtl:right-auto lg:absolute lg:max-w-[630px] lg:pb-0 xl:ltr:-right-52 xl:rtl:-left-52"
                        data-aos={isRtl ? 'fade-right' : 'fade-left'}
                        data-aos-duration="1000"
                    >
                        <img src="/assets/images/modern-saas/banner-img.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero



