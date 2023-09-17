'use client'

import React, { useEffect, useState } from 'react'
import LayoutCustom from '@/layouts/layoutCustom'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/config/api'
import { AxiosResponse } from 'axios'
import { parseCookies } from 'nookies'
import { getCookie } from 'cookies-next'
import { useLanguage } from '@/context/LanguageContext'

const fetchShopifyStore = async (userId: any) => {
  const response: AxiosResponse = await api.get(`stores/user/${userId}/stores`)
  return response
}

const Page = () => {
  const { translations } = useLanguage()

  const [user, setUser] = useState<any>(null)

  const getUser = async (): Promise<void> => {
    try {
      const response = await api.get('me')
      setUser(response.data)
    } catch (error) {
      console.error('Error fetching user: ', error)
    }
  }

  const { data: chatbotNumber } = useQuery({
    queryKey: ['number-chatbot'],
    queryFn: () => api.get(`stores/get-chatbot-number/${user?.id}`),
    enabled: !!user,
  })

  const { data: shopifyStore, isLoading } = useQuery({
    queryKey: ['shopifyStore'],
    queryFn: () => fetchShopifyStore(parseCookies()['userId']),
    enabled: Boolean(getCookie('access_token')),
  })

  const { data: shopifyStoreName, isLoading: isLoadingShopifyStoreId } = useQuery({
    queryKey: ['shopifyStoreId'],
    queryFn: () => api.get(`messages/${shopifyStore?.data[0].url}/message-count`),
    enabled: !!['shopifyStore'],
  })

  useEffect(() => {
    getUser()
  }, [])

  return (
    <LayoutCustom>
      <div className='p-20 mx-auto w-full overflow-y-auto'>
        <h3 className='text-base font-semibold leading-6 text-gray-900'>{translations.YOUR_USAGE_SUMMARY}</h3>
        <dl
          className='mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-x md:divide-y-0'>
          <div className='px-6 py-5 sm:p-8'>
            <dt className='text-base font-normal text-gray-900'>{translations.CHATBOT}</dt>
            <dt className='text-xs font-normal text-gray-400 mt-1'>{translations.TOTAL_NUMBER_OF_CREATED_CHATBOTS}</dt>
            <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
              {chatbotNumber && (
                <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
                  {chatbotNumber.data.chatbotNumber}
                  <span className='ml-2 text-sm font-medium text-gray-500'>of 1 </span>
                </div>
              )}
            </dd>
          </div>
          <div className='px-6 py-5 sm:p-8'>
            <dt className='text-base font-normal text-gray-900'>{translations.TOTAL_RESPONSES}</dt>
            <dt className='text-xs font-normal text-gray-400 mt-1'>{translations.RESPONSES_SENT_BY_YOUR_CHATBOT}</dt>
            <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
              <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
                {shopifyStoreName && shopifyStoreName.data.message_count}
                <span
                  className='ml-2 text-sm font-medium text-gray-500'>of {shopifyStoreName && shopifyStoreName.data.allowed_responses} ({translations.THIS_MONTH})</span>
              </div>
            </dd>
          </div>
          <div className='px-6 py-5 sm:p-8'>
            <dt className='text-base font-normal text-gray-900'>{translations.TOTAL_PAGES}</dt>
            <dt className='text-xs font-normal text-gray-400 mt-1'>{translations.SAVED_PAGES}</dt>
            <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
              <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
                <p>{translations.FEATURE_COMING_SOON}</p>
                {/* 0
                                <span className="ml-2 text-sm font-medium text-gray-500">sur 500</span>*/}
              </div>
            </dd>
          </div>
          <div className='px-6 py-5 sm:p-8'>
            <dt className='text-base font-normal text-gray-900'>{translations.TOTAL_CONVERSATIONS}</dt>
            <dt className='text-xs font-normal text-gray-400 mt-1'>{translations.FROM_ALL_CHATBOTS}</dt>
            <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
              <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
                <p>{translations.FEATURE_COMING_SOON}</p>
                {/*0*/}
              </div>
            </dd>
          </div>
        </dl>
        <div className='relative mt-10 flex items-center justify-between'>
          <div className='flex'>
            <h3 className='text-base font-semibold leading-6 text-gray-900'>{translations.SALES_ANALYSIS}</h3>
          </div>
        </div>
        <dl
          className='mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-x md:divide-y-0'>
          <div className='px-6 py-5 sm:p-8'>
            <dt className='text-base font-normal text-gray-900'>{translations.TOTAL_SALES}</dt>
            <dt className='text-xs font-normal text-gray-400 mt-1'>{translations.TOTAL_REVENUE_FROM_CONVERSATIONS}</dt>
            <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
              <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
                <p>{translations.FEATURE_COMING_SOON}</p>
                {/* 0 <span className="ml-2 text-sm font-medium text-gray-500"></span>*/}
              </div>
            </dd>
          </div>
          <div className='px-6 py-5 sm:p-8'>
            <dt className='text-base font-normal text-gray-900'>{translations.CONVERSATION_RATE}</dt>
            <dt className='text-xs font-normal text-gray-400 mt-1'>{translations.CONVERSATIONS_CONVERTED_TO_SALES}</dt>
            <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
              <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
                <p>{translations.FEATURE_COMING_SOON}</p>
                {/* 0*/}
              </div>
            </dd>
          </div>
          <div className='px-6 py-5 sm:p-8'>
            <dt className='text-base font-normal text-gray-900'>{translations.TOTAL_ORDERS}</dt>
            <dt className='text-xs font-normal text-gray-400 mt-1'>{translations.FROM_ALL_YOUR_CONVERSATIONS}</dt>
            <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
              <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
                <p>{translations.FEATURE_COMING_SOON}</p>
                {/* 0*/}
              </div>
            </dd>
          </div>
          <div className='px-6 py-5 sm:p-8'>
            <dt className='text-base font-normal text-gray-900'>{translations.AVO}</dt>
            <dt className='text-xs font-normal text-gray-400 mt-1'>{translations.AVERAGE_VALUE_OF_ORDERS}</dt>
            <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
              <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
                <p>{translations.FEATURE_COMING_SOON}</p>
                {/*0*/}
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </LayoutCustom>
  )
}

export default Page
