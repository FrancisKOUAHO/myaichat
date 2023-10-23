import { useLanguage } from '../contexts/LanguageContext'
import Image from "next/image";

const Prices = () => {
    const { translations } = useLanguage()

    return(
        <div className='overflow-x-hidden'>
            <section
                className='bg-black bg-cover bg-top bg-no-repeat pt-[82px] lg:pt-[106px] h-[95vh'
                style={{
                    background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
                    height: '95vh',
                }}
            >

                <div className='container lg:pt-7'>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 items-center lg:justify-evenly lg:items-end xl:w-[1280px]">
                        <div className="flex flex-col space-y-8 p-8 rounded-xl border border-opacity-40 w-full drop-shadow-[0_17px_17px_rgba(40,97,230,0.07)] border-blue-200 bg-gradient-to-b from-blue-50 to-background">
                            <div>
                                <div className="text-[24px] font-bold leading-10 text-blue-700">
                                    Scale
                                </div>
                                <p className="leading-7 font-normal text-blue-400 dark:text-blue-800">
                                    15-Days Free Trial
                                </p>
                            </div>
                            <div className="flex-col gap-[2px] flex text-blue-600">
                                <div className="h-12 gap-[12px] justify-start items-center inline-flex pb-2">
                                    <span className="text-[24px] leading-10">
                                        €
                                    </span>
                                    <span className="text-[56px] font-semibold leading-10">
                                        499
                                    </span>
                                    <span className="text-[32px] font-normal leading-10">
                                        /month
                                    </span>
                                </div>
                                <div className="items-center gap-[12px] inline-flex text-[14px] font-semibold uppercase leading-normal">
                                    <svg className="w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 5v14m-7-7h14">

                                        </path>
                                    </svg>
                                    *Extra +€12 for additional 100 replies.
                                </div>
                            </div>
                            <div className="justify-center items-center inline-flex my-4">
                                <div className="w-full h-[1px] bg-gray-100 bg-opacity-5">

                                </div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            <span className="font-semibold">
                                                What is included
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            6,000 replies/month
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            30,000 webpages stored
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            10 Stores
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            Priority Support
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            AI Training
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            Sales Tracker
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            Embed Anywhere
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="group/button flex items-center justify-center transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 border-pink-500 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold border-0 w-full" href="/login">
                                <span className="inline-block">
                                    Start FREE Trial
                                </span>
                            </a>
                        </div>
                        <div className="flex flex-col space-y-8 p-8 rounded-xl border border-opacity-40 w-full drop-shadow-[0_17px_17px_rgba(113,65,225,0.17)] border-pink-200 bg-gradient-to-b from-pink-50 to-background">
                            <div>
                                <div className="text-[24px] font-bold leading-10 text-pink-700">
                                    Pro
                                </div>
                                <p className="leading-7 font-normal text-pink-400 dark:text-pink-800">
                                    15-Days Free Trial
                                </p>
                            </div>
                            <div className="flex-col gap-[2px] flex text-pink-600">
                                <div className="h-12 gap-[12px] justify-start items-center inline-flex pb-2">
                                    <span className="text-[24px] leading-10">
                                        €
                                    </span>
                                    <span className="text-[56px] font-semibold leading-10">
                                        249
                                    </span>
                                    <span className="text-[32px] font-normal leading-10">
                                        /month
                                    </span>
                                </div>
                                <div className="items-center gap-[12px] inline-flex text-[14px] font-semibold uppercase leading-normal">
                                    <svg className="w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 5v14m-7-7h14">

                                        </path>
                                    </svg>
                                    *Extra +€12 for additional 100 replies.
                                </div>
                            </div>
                            <div className="justify-center items-center inline-flex my-4">
                                <div className="w-full h-[1px] bg-gray-100 bg-opacity-5">

                                </div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-pink-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            <span className="font-semibold">
                                                What is included
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-pink-50 border-pink-200">
                                        <svg className="text-pink-900" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-pink-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            3,000 replies/month
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-pink-50 border-pink-200">
                                        <svg className="text-pink-900" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-pink-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            15,000 webpages stored
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-pink-50 border-pink-200">
                                        <svg className="text-pink-900" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-pink-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            10 Stores
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-pink-50 border-pink-200">
                                        <svg className="text-pink-900" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-pink-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            Priority Support
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-pink-50 border-pink-200">
                                        <svg className="text-pink-900" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5">

                                        </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-pink-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            AI Training
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-pink-50 border-pink-200">
                                        <svg className="text-pink-900" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-pink-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            Sales Tracker
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-pink-50 border-pink-200">
                                        <svg className="text-pink-900" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-pink-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            Embed Anywhere
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="group/button flex items-center justify-center transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 border-pink-500 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3 bg-pink-500 hover:bg-pink-700 text-white font-semibold border-0 w-full" href="/new/team">
                                <span className="inline-block">
                                    Start FREE Trial
                                </span>
                            </a>
                        </div>
                        <div className="flex flex-col space-y-8 p-8 rounded-xl border border-opacity-40 w-full drop-shadow-[0_17px_17px_rgba(40,97,230,0.07)] border-blue-200 bg-gradient-to-b from-blue-50 to-background">
                            <div>
                                <div className="text-[24px] font-bold leading-10 text-blue-700">
                                    Growth
                                </div>
                                <p className="leading-7 font-normal text-blue-400 dark:text-blue-800">
                                    15-Days Free Trial
                                </p>
                            </div>
                            <div className="flex-col gap-[2px] flex text-blue-600">
                                <div className="h-12 gap-[12px] justify-start items-center inline-flex pb-2">
                                    <span className="text-[24px] leading-10">
                                        €
                                    </span>
                                    <span className="text-[56px] font-semibold leading-10">
                                        129
                                    </span>
                                    <span className="text-[32px] font-normal leading-10">
                                        /month
                                    </span>
                                </div>
                                <div className="items-center gap-[12px] inline-flex text-[14px] font-semibold uppercase leading-normal">
                                    <svg className="w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 5v14m-7-7h14">

                                        </path>
                                    </svg>
                                    *Extra +€12 for additional 100 replies.
                                </div>
                            </div>
                            <div className="justify-center items-center inline-flex my-4">
                                <div className="w-full h-[1px] bg-gray-100 bg-opacity-5">

                                </div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            <span className="font-semibold">
                                                What is included
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            1,500 replies/month
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            5,000 webpages stored
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            2 Stores
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            Priority Support
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            AI Training
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            Sales Tracker
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            Embed Anywhere
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="group/button flex items-center justify-center transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 border-pink-500 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold border-0 w-full" href="/login">
                                <span className="inline-block">
                                    Start FREE Trial
                                </span>
                            </a>
                        </div>
                        <div className="flex flex-col space-y-8 p-8 rounded-xl border border-opacity-40 w-full drop-shadow-[0_17px_17px_rgba(40,97,230,0.07)] border-blue-200 bg-gradient-to-b from-blue-50 to-background">
                            <div>
                                <div className="text-[24px] font-bold leading-10 text-blue-700">
                                    Starter
                                </div>
                                <p className="leading-7 font-normal text-blue-400 dark:text-blue-800">
                                    15-Days Free Trial
                                </p>
                            </div>
                            <div className="flex-col gap-[2px] flex text-blue-600">
                                <div className="h-12 gap-[12px] justify-start items-center inline-flex pb-2">
                                    <span className="text-[24px] leading-10">
                                        €
                                    </span>
                                    <span className="text-[56px] font-semibold leading-10">
                                        49
                                    </span>
                                    <span className="text-[32px] font-normal leading-10">
                                        /month
                                    </span>
                                </div>
                                <div className="items-center gap-[12px] inline-flex text-[14px] font-semibold uppercase leading-normal">
                                    <svg className="w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 5v14m-7-7h14">

                                        </path>
                                    </svg>
                                    *Extra +€12 for additional 100 replies.
                                </div>
                            </div>
                            <div className="justify-center items-center inline-flex my-4">
                                <div className="w-full h-[1px] bg-gray-100 bg-opacity-5">

                                </div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            <span className="font-semibold">
                                                What is included
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            500 replies/month
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            1,000 webpages stored
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            2 Stores
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            Standard Support
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            AI Training
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            Sales Tracker
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div className="w-5 h-5 p-1 rounded-xl border justify-center items-center flex bg-blue-50 border-blue-200">
                                        <svg className="text-blue-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5">

                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow shrink basis-0 p-0 flex-col justify-start items-start inline-flex text-blue-600">
                                        <div className="self-stretch text-4 leading-normal">
                                            Embed Anywhere
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="group/button flex items-center justify-center transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 border-pink-500 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold border-0 w-full" href="/login">
                                <span className="inline-block">
                                    Start FREE Trial
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Prices

