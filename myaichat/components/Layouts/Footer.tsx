import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext'

const Footer = () => {
    const {translations} = useLanguage();

    return (
        <footer className="mt-auto bg-gradient-to-b from-[#13111C] to-[#0f0d17]">
            <div className="container">
                <div className="grid gap-y-10 gap-x-4 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:py-[100px]">
                    <div className="relative">
                        <Link href="/">
                            <img src="https://i.goopics.net/ux8qzl.png" alt="myaichat" className="h-7 w-auto cursor-pointer"/>
                        </Link>
                        <img src="/assets/images/footer-shape.png" alt="footer-shape" className="absolute bottom-0 right-0 sm:left-0"/>
                        <img src="/assets/images/footer-shape-dark.png" alt="footer-shape-dark" className="absolute bottom-0 right-0 hidden dark:block sm:left-0"/>
                    </div>
                    <div className="flex flex-col gap-3 font-bold text-white">
                        <div className="mb-3 text-lg font-extrabold">{translations.footer.legal.legal}</div>
                        <Link href="/terms" className="inline-block transition hover:scale-110 hover:text-secondary cursor-pointer">
                            {translations.footer.legal.termsAndConditions}
                        </Link>
                        <Link href="/privacy" className="inline-block transition hover:scale-110 hover:text-secondary cursor-pointer">
                            {translations.footer.legal.privacyPolicy}
                        </Link>
                        <Link href="/blog" className="inline-block transition hover:scale-110 hover:text-secondary cursor-pointer">
                            {translations.footer.blog}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="py-5 text-white">
                <div className="container">
                    <div className="items-center justify-between text-center font-bold md:flex">
                        <div>
                            {translations.footer.blog} {new Date().getFullYear()} {translations.footer.myaichat}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
