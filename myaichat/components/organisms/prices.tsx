import { useLanguage } from '../../contexts/LanguageContext';

const Prices = () => {
    const { translations } = useLanguage();

    return (
        <section
            className="h-[100vh bg-black bg-cover bg-top bg-no-repeat"
            style={{
                background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
                height: '100vh',
            }}
        >
            <div className="container">
                <div className="heading mb-5 text-center text-white">
                    <h4 style={{ color: 'white', marginBottom: '22px' }}>Pricing Compare plans & features</h4>
                    <h5>Discover the ideal plan</h5>
                </div>
                <div className="mb-8 grid grid-cols-1 items-center gap-4 lg:grid-cols-4 lg:items-end lg:justify-evenly xl:w-[1280px]">
                    <div className="border-blue-200 from-blue-50 to-background flex w-full flex-col space-y-8 rounded-xl border border-opacity-40 bg-gradient-to-b p-8 drop-shadow-[0_17px_17px_rgba(40,97,230,0.07)]">
                        <div>
                            <div className="text-blue-700 text-[24px] font-bold leading-10">Scale</div>
                            <p className="text-blue-400 dark:text-blue-800 font-normal leading-7">7 days free trial</p>
                        </div>
                        <div className="text-blue-600 flex flex-col gap-[2px]">
                            <div className="inline-flex h-12 items-center justify-start gap-[12px] pb-2">
                                <span className="text-[24px] leading-10">€</span>
                                <span className="text-[56px] font-semibold leading-10">499</span>
                                <span className="text-[32px] font-normal leading-10">/month</span>
                            </div>
                        </div>
                        <div className="my-4 inline-flex items-center justify-center">
                            <div className="bg-gray-100 h-[1px] w-full bg-opacity-5"></div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">
                                        <span className="font-semibold">What is included</span>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">6,000 replies/month</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">30,000 webpages stored</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">10 Stores</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">Priority Support</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">AI Training</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">Sales Tracker</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">Embed Anywhere</div>
                                </div>
                            </div>
                        </div>
                        <a
                            style={{
                                background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
                                boxShadow: '0 17px 17px rgba(40, 97, 230, 0.07)',
                                borderRadius: '8px',
                                color: 'white',
                                padding: '8px 16px',
                                textAlign: 'center',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                textDecoration: 'none',
                            }}
                            href="https://app.myaichat.io/"
                        >
                            <span className="inline-block">Start FREE Trial</span>
                        </a>
                    </div>
                    <div className="border-pink-200 from-pink-50 to-background flex w-full flex-col space-y-8 rounded-xl border border-opacity-40 bg-gradient-to-b p-8 drop-shadow-[0_17px_17px_rgba(113,65,225,0.17)]">
                        <div>
                            <div className="text-pink-700 text-[24px] font-bold leading-10">Pro</div>
                            <p className="text-pink-400 dark:text-pink-800 font-normal leading-7">7 days free trial</p>
                        </div>
                        <div className="text-pink-600 flex flex-col gap-[2px]">
                            <div className="inline-flex h-12 items-center justify-start gap-[12px] pb-2">
                                <span className="text-[24px] leading-10">€</span>
                                <span className="text-[56px] font-semibold leading-10">249</span>
                                <span className="text-[32px] font-normal leading-10">/month</span>
                            </div>
                        </div>
                        <div className="my-4 inline-flex items-center justify-center">
                            <div className="bg-gray-100 h-[1px] w-full bg-opacity-5"></div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="text-pink-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">
                                        <span className="font-semibold">What is included</span>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-pink-50 border-pink-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-pink-900"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-pink-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">3,000 replies/month</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-pink-50 border-pink-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-pink-900"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-pink-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">15,000 webpages stored</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-pink-50 border-pink-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-pink-900"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-pink-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">10 Stores</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-pink-50 border-pink-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-pink-900"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-pink-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">Priority Support</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-pink-50 border-pink-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-pink-900"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-pink-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">AI Training</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-pink-50 border-pink-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-pink-900"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-pink-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">Sales Tracker</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-pink-50 border-pink-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-pink-900"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-pink-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">Embed Anywhere</div>
                                </div>
                            </div>
                        </div>
                        <a
                            style={{
                                background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
                                boxShadow: '0 17px 17px rgba(40, 97, 230, 0.07)',
                                borderRadius: '8px',
                                color: 'white',
                                padding: '8px 16px',
                                textAlign: 'center',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                textDecoration: 'none',
                            }}
                            href="https://app.myaichat.io/"
                        >
                            <span className="inline-block">Start FREE Trial</span>
                        </a>
                    </div>
                    <div className="border-blue-200 from-blue-50 to-background flex w-full flex-col space-y-8 rounded-xl border border-opacity-40 bg-gradient-to-b p-8 drop-shadow-[0_17px_17px_rgba(40,97,230,0.07)]">
                        <div>
                            <div className="text-blue-700 text-[24px] font-bold leading-10">Growth</div>
                            <p className="text-blue-400 dark:text-blue-800 font-normal leading-7">7 days free trial</p>
                        </div>
                        <div className="text-blue-600 flex flex-col gap-[2px]">
                            <div className="inline-flex h-12 items-center justify-start gap-[12px] pb-2">
                                <span className="text-[24px] leading-10">€</span>
                                <span className="text-[56px] font-semibold leading-10">129</span>
                                <span className="text-[32px] font-normal leading-10">/month</span>
                            </div>
                        </div>
                        <div className="my-4 inline-flex items-center justify-center">
                            <div className="bg-gray-100 h-[1px] w-full bg-opacity-5"></div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">
                                        <span className="font-semibold">What is included</span>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">1,500 replies/month</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">5,000 webpages stored</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">2 Stores</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">Priority Support</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">AI Training</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">Sales Tracker</div>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-start gap-3">
                                <div className="bg-blue-50 border-blue-200 flex h-5 w-5 items-center justify-center rounded-xl border p-1">
                                    <svg
                                        className="text-blue-700"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <div className="text-blue-600 inline-flex shrink grow basis-0 flex-col items-start justify-start p-0">
                                    <div className="text-4 self-stretch leading-normal">Embed Anywhere</div>
                                </div>
                            </div>
                        </div>
                        <a
                            style={{
                                background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
                                boxShadow: '0 17px 17px rgba(40, 97, 230, 0.07)',
                                borderRadius: '8px',
                                color: 'white',
                                padding: '8px 16px',
                                textAlign: 'center',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                textDecoration: 'none',
                            }}
                            href="https://app.myaichat.io/"
                        >
                            <span className="inline-block">Start FREE Trial</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;
