import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext'

const Footer = () => {
    const {translations} = useLanguage();


    return (
        <footer className="mt-auto"
                style={{
                    background: `linear-gradient(to bottom, #13111C 0%, #0f0d17 100%);;
`,
                }}>
            <div className="container">
                <div className="grid gap-y-10 gap-x-4 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:py-[100px]">
                    <div className="relative">
                        <Link href="/">
                            <img src="https://i.goopics.net/ux8qzl.png" alt="myaichat" className="h-7 w-auto"/>
                        </Link>
                        <img src="/assets/images/footer-shape.png" alt="footer-shape"
                             className="absolute bottom-0 right-0 sm:left-0"/>
                        <img
                            src="/assets/images/footer-shape-dark.png"
                            alt="footer-shape-dark"
                            className="absolute bottom-0 right-0 hidden dark:block sm:left-0"
                        />
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold"
                            style={{color: '#ffffff'}}
                        >
                            <li className="mb-3 text-lg font-extrabold text-black dark:text-white"
                                style={{color: '#ffffff'}}>{translations.footer.legal.legal}</li>
                            <li>
                                <Link href="" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    {translations.footer.legal.termsAndConditions}
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    {translations.footer.legal.privacyPolicy}
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog"
                                      className="inline-block transition hover:scale-110 hover:text-secondary">
                                    {translations.footer.blog}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-5"
                 style={{
                     color: '#ffffff',
                     background: `linear-gradient(to bottom, #0f0d17 0%, #0e0b10 100%);`,
                 }}>
                <div className="container">
                    <div className="items-center justify-between text-center font-boldmd:flex">
                        <div>
                            {translations.footer.blog} {new Date().getFullYear() + ' '}
                            {translations.footer.myaichat}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
