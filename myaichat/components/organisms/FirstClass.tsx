import { useLanguage } from '../../contexts/LanguageContext'

const FirstClass = () => {
    const {translations} = useLanguage();

    return (
        <section className="py-14 dark:bg-white/[0.03] lg:py-20"
                 // style={{background: 'hsl(250, 24%, 9%)'}}
        >
            <div className="container">
                <div className="heading mb-5 text-center">
                    <h4 style={{color: 'white'}}>{translations.firstClass}</h4>
                </div>
                <div
                    className="mt-14 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-20 lg:grid-cols-2 lg:h-[389px]"
                    style={{
                        background: "radial-gradient(193.33% 779.99% at 81.67% -6.05%, rgba(71, 189, 255, 0.3) 0%, rgba(71, 189, 255, 0) 100%)",
                    }}
                >
                    <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4 style={{color: 'white', fontSize: '26px'}}>{translations.conversionOptimization.title}</h4>
                        <p className="mt-6 text-lg font-semibold" style={{color: 'white'}}>
                            {translations.conversionOptimization.content}
                        </p>
                    </div>
                    <div className="lg:ltr:pl-24 lg:rtl:pr-24">
                        <img src="/assets/images/myaichat/conversation.png" alt="" className="rounded-2xl"/>
                    </div>
                </div>
                <div
                    className="mt-10 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-16 lg:grid-cols-2 lg:h-[389px]"
                    style={{
                        background:"radial-gradient(193.33% 779.99% at 81.67% -6.05%, rgba(180, 118, 229, 0.3) 0%, rgba(180, 118, 229, 0) 100%)",
                    }}
                >
                    <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4 style={{color: 'white', fontSize: '26px'}}>{translations.instantResponses.title}</h4>
                        <p className="mt-6 text-lg font-semibold" style={{color: 'white'}}>
                            {translations.instantResponses.content}
                        </p>
                    </div>
                    <div className="lg:ltr:pl-24 lg:rtl:pr-24">
                        <img src="/assets/images/myaichat/exemple.png" alt="" className="rounded-2xl"/>
                    </div>
                </div>
                <div
                    className="mt-10 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-16 lg:grid-cols-2 lg:h-[389px] lg:flex lg:items-center lg:justify-center"
                    style={{ background: "radial-gradient(193.33% 779.99% at 81.67% -6.05%, rgba(71, 189, 255, 0.3) 0%, rgba(71, 189, 255, 0) 100%);", }}>
                    <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right lg:flex lg:flex-col lg:justify-center">
                        <h4 style={{color: 'white', fontSize: '26px'}}>{translations.boostPerf.title}</h4>
                        <p className="mt-6 text-lg font-semibold" style={{color: 'white'}}>{translations.boostPerf.content}</p>
                    </div>
                    <div className="flex justify-center items-center lg:ltr:pl-24 lg:rtl:pr-24 lg:flex lg:flex-col">
                        <div className="lg:w-[411px]">
                            <img src="/assets/images/myaichat/stat1.png" style={{width: '70%'}} alt="" className="rounded-2xl mx-auto"/>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FirstClass;
