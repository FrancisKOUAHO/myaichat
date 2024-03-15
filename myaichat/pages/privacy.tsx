import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { useLanguage } from '../contexts/LanguageContext';

const Privacy = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';
    const { translations } = useLanguage();

    return (
        <section
            className='bg-black bg-cover bg-top bg-no-repeat pt-[82px] lg:pt-[106px] px-5 lg:px-[5%] text-white'
            style={{
                background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
                height: '100vh',
            }}
        >
                <h1 className="text-center text-xl lg:text-3xl font-bold my-10">
                    {translations.privacyPolicy.title}
                </h1>
                <div className="text-lg">
                    <p>{translations.privacyPolicy.introduction}</p>
                    <h2 className="text-lg lg:text-xl font-semibold mt-5">
                        {translations.privacyPolicy.section1.title}
                    </h2>
                    <p>{translations.privacyPolicy.section1.content}</p>
                    <h2 className="text-lg lg:text-xl font-semibold mt-5">
                        {translations.privacyPolicy.section2.title}
                    </h2>
                    <p>{translations.privacyPolicy.section2.content}</p>
                    {/* Ajoutez d'autres sections comme nécessaire */}
                </div>
            </section>
    );
}

export default Privacy;
