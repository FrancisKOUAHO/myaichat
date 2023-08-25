import Link from 'next/link';

const Footer = () => {
    return (
            <footer className="mt-auto dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent"
                    style={{
                        background: `linear-gradient(327.21deg, rgba(98, 19, 255, 0.01) 29.79%, rgba(58, 19, 255, 0) 85.72%), linear-gradient(245.93deg, rgba(209, 25, 80, 0) 0%, rgba(209, 21, 111, 0.16) 36.63%), linear-gradient(147.6deg, rgba(209, 0, 136, 0) 3.65%, rgba(33, 0, 75, 0.24) 40.32%), #301128`,
                    }}>
                <div className="container">
                    <div className="grid gap-y-10 gap-x-4 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:py-[100px]">
                        <div className="relative">
                            <Link href="/">
                                <img src="https://i.goopics.net/ux8qzl.png" alt="myaichat" className="h-7 w-auto" />
                            </Link>
                            <img src="/assets/images/footer-shape.png" alt="footer-shape" className="absolute bottom-0 right-0 sm:left-0" />
                            <img
                                src="/assets/images/footer-shape-dark.png"
                                alt="footer-shape-dark"
                                className="absolute bottom-0 right-0 hidden dark:block sm:left-0"
                            />
                        </div>
                        <div>
                            <ul className="flex flex-col gap-3 font-bold"
                            style={{color: '#655373'}}
                            >
                                <li className="mb-3 text-lg font-extrabold text-black dark:text-white" style={{color: '#655373'}}>Légal</li>
                                <li>
                                    <Link href="" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Termes et conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        politique de confidentialité
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-5 dark:border-t-2 dark:border-white/5 dark:bg-none"
                     style={{
                         color: '#655373',
                         background: `linear-gradient(327.21deg, rgba(98, 19, 255, 0.01) 29.79%, rgba(58, 19, 255, 0) 85.72%), linear-gradient(245.93deg, rgba(209, 25, 80, 0) 0%, rgba(209, 21, 111, 0.16) 36.63%), linear-gradient(147.6deg, rgba(209, 0, 136, 0) 3.65%, rgba(33, 0, 75, 0.24) 40.32%), #301128`,
                     }}>
                    <div className="container">
                        <div className="items-center justify-between text-center font-bold dark:text-white md:flex">
                            <div>
                                Copyright© { new Date().getFullYear() + ' ' }
                                myaichat Corp.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;
