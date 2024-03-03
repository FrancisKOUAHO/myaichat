'use client'

import {Tab} from '@headlessui/react'
import React, {useState} from 'react'
import {useMutation, useQuery} from '@tanstack/react-query'
import {api} from '@/config/api'
import LayoutSubscription from '@/layouts/layoutSubscription'

const Page = () => {

    const [selectedTab, setSelectedTab] = useState(0)

    const handleTabClick = (index: number) => setSelectedTab(index)

    const tabClasses = (index: number) =>
        `w-[50%] p-1 rounded-lg focus:outline-none ${index === selectedTab ? 'bg-indigo-100' : 'bg-gray-50'}`

    const {data: plans} = useQuery(['plans'], () => api.get(`plans`))

    const handlePlanSubscribeAsync = useMutation(
        (planId: number) => api.post(`checkout/${planId}`),
        {
            onError: (error): void => {
                console.error(error)
            },
        },
    )

    const handlePlanSubscribe = async (planId: number) => {
        try {
            setIsLoading((prevLoading) => ({
                ...prevLoading,
                [planId]: true,
            }))

            const data: any = await handlePlanSubscribeAsync.mutateAsync(planId)

            window.location.replace(data.data.url)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading((prevLoading) => ({
                ...prevLoading,
                [planId]: false,
            }))
        }
    }

    const [isLoading, setIsLoading] = useState<{ [key: number]: boolean }>({})

    const Starter = plans?.data.data.find((plan: any) => plan.id === 1)
    const Growth = plans?.data.data.find((plan: any) => plan.id === 2)
    const Pro = plans?.data.data.find((plan: any) => plan.id === 3)
    const Scale = plans?.data.data.find((plan: any) => plan.id === 4)

    return (
        <LayoutSubscription>
            <div className='bg-white h-screen'>
                <div className='p-8'>
                    <span className='font-bold text-gray-900 text-xl'>{'Préparation au démarrage'}</span>
                    <p
                        className='text-sm font-normal text-gray-400 mt-2'>{'Sélectionnez votre plan avant d\'accéder au tableau de bord.'}</p>
                </div>
                <div className='flex h-100 flex-col justify-center py-12 sm:px-6 lg:p-8 p-8 bg-white '>
                    <div>
                        <dl
                            className='grid grid-cols-1 md:grid-cols-2 divide-y divide-gray-200 overflow-hidden shadow md:divide-x md:divide-y-0'>
                            <Tab.Group>
                                <div>
                                    <Tab.List>
                                        <div className='w-[70%]'>
                                            <Tab onClick={() => handleTabClick(0)} className={tabClasses(0)}>
                                                <dt className='text-xs font-medium text-gray-600 mt-1'>Mensuellement</dt>
                                            </Tab>
                                        </div>
                                    </Tab.List>
                                </div>
                                <Tab.Panels>
                                    <Tab.Panel>
                                        <div className='grid grid-cols-1 md:grid-cols-4'>
                                            <div className='px-6 py-5 sm:p-8'>
                                                <div className='flex items-baseline gap-x-1'>
                                                    <dt className='text-lg font-semibold  text-gray-800'>Growth</dt>
                                                </div>
                                                <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
                                                    <div
                                                        className='flex items-baseline text-2xl font-semibold text-gray-600'>
                                                        €129
                                                        <span className='text-sm font-semibold'>/mois</span>
                                                    </div>
                                                </dd>
                                                <button
                                                    onClick={() => handlePlanSubscribe(Growth && Growth.id)}
                                                    type='button'
                                                    disabled={isLoading[Growth && Growth.id]}
                                                    className=' w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100'>
                                                    <span
                                                        className=' text-sm font-medium text-indigo-500'>{isLoading[Growth && Growth.id] ? 'Loading...' : 'S\'abonner'}</span>
                                                </button>
                                                <div
                                                    className='text-xs text-indigo-500 font-semibold mt-2 text-center'>
                                                    7 jours d'essai gratuit
                                                </div>
                                            </div>
                                            <div className='px-6 py-5 sm:p-8'>
                                                <dt className='text-lg font-semibold  text-gray-800'>Pro</dt>
                                                <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
                                                    <div
                                                        className='flex items-baseline text-2xl font-semibold text-gray-600'>
                                                        €249
                                                        <span className='text-sm font-semibold'>/mois</span>
                                                    </div>
                                                </dd>
                                                <button
                                                    onClick={() => handlePlanSubscribe(Pro && Pro.id)}
                                                    type='button'
                                                    disabled={isLoading[Pro && Pro.id]}
                                                    className=' w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100'>
                                                    <span
                                                        className=' text-sm font-medium text-indigo-500'>{isLoading[Pro && Pro.id] ? 'Loading...' : 'S\'abonner'}</span>
                                                </button>
                                                <div
                                                    className='text-xs text-indigo-500 font-semibold mt-2 text-center'>
                                                    7 jours d'essai gratuit
                                                </div>
                                            </div>
                                            <div className='px-6 py-5 sm:p-8'>
                                                <dt className='text-lg font-semibold  text-gray-800'>Scale</dt>
                                                <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
                                                    <div
                                                        className='flex items-baseline text-2xl font-semibold text-gray-600'>
                                                        €499
                                                        <span className='text-sm font-semibold'>/mois</span>
                                                    </div>
                                                </dd>

                                                <button
                                                    onClick={() => handlePlanSubscribe(Scale && Scale.id)}
                                                    type='button'
                                                    disabled={isLoading[Scale && Scale.id]}
                                                    className=' w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100'>
                                                    <span
                                                        className=' text-sm font-medium text-indigo-500'>{isLoading[Scale && Scale.id] ? 'Loading...' : 'S\'abonner'}</span>
                                                </button>
                                                <div
                                                    className='text-xs text-indigo-500 font-semibold mt-2 text-center'>
                                                    7 jours d'essai gratuit
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </dl>
                    </div>
                    <div className='mt-8'>
                        <dl
                            className='mt-5 grid grid-cols-1 md:grid-cols-2 divide-y divide-gray-200 overflow-hidden shadow md:divide-x md:divide-y-0'>
                            <Tab.Group>
                                <div className='px-6 py-5 sm:p-8'>
                                    <Tab.List>
                                        <div className='w-[100%]'>
                                            <Tab>
                                                <dt className='text-sm font-bold text-gray-600'>Caractéristiques des
                                                    offres
                                                </dt>
                                            </Tab>
                                        </div>
                                    </Tab.List>
                                </div>
                                <Tab.Panels>
                                    <Tab.Panel>
                                        <div className='grid grid-cols-1 md:grid-cols-4'>
                                            <div className='px-6 py-5 sm:p-8 border border-gray-200'>
                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>1 500
                                                        réponses/mois
                                                    </dt>
                                                </div>
                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>5 Chatbots
                                                    </dt>
                                                </div>
                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>Membres
                                                        illimités
                                                    </dt>
                                                </div>

                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>Support
                                                        prioritaire
                                                    </dt>
                                                </div>

                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>{'Formation à l\'IA'}</dt>
                                                </div>
                                            </div>

                                            <div className='px-6 py-5 sm:p-8 border border-gray-200'>
                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>3 000
                                                        réponses/mois
                                                    </dt>
                                                </div>
                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>10 Chatbots
                                                    </dt>
                                                </div>
                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>Membres
                                                        illimités
                                                    </dt>
                                                </div>

                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>Support
                                                        prioritaire
                                                    </dt>
                                                </div>

                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>{'Formation à l\'IA'}</dt>
                                                </div>
                                            </div>

                                            <div className='px-6 py-5 sm:p-8 border border-gray-200'>
                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>6 000
                                                        réponses/mois
                                                    </dt>
                                                </div>
                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>10 Chatbots
                                                    </dt>
                                                </div>
                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>Membres
                                                        illimités
                                                    </dt>
                                                </div>

                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>Support
                                                        prioritaire
                                                    </dt>
                                                </div>

                                                <div className='flex items-center gap-x-1 mb-4'>
                                                    <dt className='text-xs font-medium text-gray-500'>{'Formation à l\'IA'}</dt>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </dl>
                    </div>
                </div>
            </div>
        </LayoutSubscription>
    )
}

export default Page
