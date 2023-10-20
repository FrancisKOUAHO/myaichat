import Link from 'next/link'
import { useSelector } from 'react-redux'
import { IRootState } from '../store'
import { useLanguage } from '../contexts/LanguageContext'

const Tarifs = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl'

    const { translations } = useLanguage()

    return (
        <div className='overflow-x-hidden'>
            <section
                className='bg-black bg-cover bg-top bg-no-repeat pt-[82px] lg:pt-[106px] h-[95vh'
                style={{
                    background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
                    height: '95vh',
                }}
            >
                <div className='container lg:pt-7'>

                </div>
            </section>
        </div>
    )
}

export default Tarifs
