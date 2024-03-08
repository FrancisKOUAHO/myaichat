import { useLanguage } from "../../contexts/LanguageContext";

const Features = () => {
    const {translations} = useLanguage();

    return (
        <section className="py-14 lg:py-20"
                 // style={{background: 'hsl(250, 24%, 9%)'}}
        >
            <div className="container sm:mt-10">
                <div className="lg:w-1/2">
                    <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6 style={{fontSize: '28px'}}>{translations.features.title}</h6>
                        <h6 className="text-black mt-4 text-lg font-semibold"
                            style={{color: 'white', fontSize: '38px', lineHeight: '50px'}}
                        >
                            {translations.features.content}
                        </h6>
                    </div>
                </div>
                <div
                    className=" text-white mt-16 grid gap-x-7 gap-y-12 text-lg font-semibold sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
                    <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                        <div className="h-10 w-10 flex-none text-black dark:text-white">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.25175 22.8926H2.67813C1.58662 22.8926 0.701782 23.7774 0.701782 24.8689V36.8477C0.701782 37.9392 1.58662 38.8241 2.67813 38.8241H9.25175C10.3433 38.8241 11.2281 37.9392 11.2281 36.8477V24.8689C11.2281 23.7774 10.3433 22.8926 9.25175 22.8926Z"
                                    fill="#47BDFF"
                                />
                                <path
                                    d="M22.936 12.0098H16.3623C15.2708 12.0098 14.386 12.8946 14.386 13.9861V36.8482C14.386 37.9397 15.2708 38.8245 16.3623 38.8245H22.936C24.0275 38.8245 24.9123 37.9397 24.9123 36.8482V13.9861C24.9123 12.8946 24.0275 12.0098 22.936 12.0098Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M36.6202 0.929688H30.0465C28.955 0.929688 28.0702 1.81453 28.0702 2.90604V36.8481C28.0702 37.9396 28.955 38.8244 30.0465 38.8244H36.6202C37.7117 38.8244 38.5965 37.9396 38.5965 36.8481V2.90604C38.5965 1.81453 37.7117 0.929688 36.6202 0.929688Z"
                                    fill="#B476E5"
                                />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="mb-6 text-[22px] font-extrabold dark:text-white">{translations.personalize.title}</h3>
                            <p className="line-clamp-3">{translations.personalize.content}</p>
                        </div>
                    </div>
                    <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                        <div className="h-10 w-10 flex-none text-black dark:text-white">
                            <svg width="34" height="37" viewBox="0 0 34 37" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.01127 0.318359H0.938767C0.4203 0.318359 0 0.738659 0 1.25713V35.0798C0 35.5983 0.4203 36.0186 0.938767 36.0186H5.01127C5.52973 36.0186 5.95003 35.5983 5.95003 35.0798V1.25713C5.95003 0.738659 5.52973 0.318359 5.01127 0.318359Z"
                                    fill="#B476E5"
                                />
                                <mask id="mask0_733_15588" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="7"
                                      y="0" width="28" height="23">
                                    <path
                                        d="M31.1839 0.318359H10.4664C8.91096 0.318359 7.65005 1.57926 7.65005 3.13466V19.6022C7.65005 21.1576 8.91096 22.4185 10.4664 22.4185H31.1839C32.7393 22.4185 34.0002 21.1576 34.0002 19.6022V3.13466C34.0002 1.57926 32.7393 0.318359 31.1839 0.318359Z"
                                        fill="#01B969"
                                    />
                                </mask>
                                <g mask="url(#mask0_733_15588)">
                                    <path
                                        d="M31.1839 0.318359H10.4664C8.91096 0.318359 7.65005 1.57926 7.65005 3.13466V19.6022C7.65005 21.1576 8.91096 22.4185 10.4664 22.4185H31.1839C32.7393 22.4185 34.0002 21.1576 34.0002 19.6022V3.13466C34.0002 1.57926 32.7393 0.318359 31.1839 0.318359Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M34.2428 10.6993L22.2819 22.6602L34.2428 34.621L46.2036 22.6602L34.2428 10.6993Z"
                                        fill="currentColor"/>
                                </g>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="mb-6 text-[22px] font-extrabold dark:text-white">{translations.Availability.title}</h3>
                            <p className="line-clamp-3">{translations.Availability.content}</p>
                        </div>
                    </div>
                    <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                        <div className="h-10 w-10 flex-none">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M35.4885 2.06836H5.20114C3.85481 2.06836 2.75861 3.16457 2.75861 4.51089V7.52888C2.75861 9.7887 3.77665 11.8864 5.5509 13.2844L14.8765 20.6316H25.8122L35.1378 13.2844C36.9129 11.8864 37.931 9.78774 37.931 7.52888V4.51089C37.931 3.16457 36.8348 2.06836 35.4885 2.06836Z"
                                    fill="#47BDFF"
                                />
                                <path
                                    d="M15.46 23.5625V35.7752C15.46 36.3242 15.7668 36.8274 16.2543 37.0785C16.4664 37.187 16.696 37.2407 16.9255 37.2407C17.2255 37.2407 17.5244 37.1488 17.7775 36.9681L24.6166 32.0831C25.0015 31.8075 25.2302 31.363 25.2302 30.8901V23.5625H15.46Z"
                                    fill="#B476E5"
                                />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="mb-6 text-[22px] font-extrabold dark:text-white">{translations.DataAnalysis.title}</h3>
                            <p className="line-clamp-3">{translations.DataAnalysis.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
