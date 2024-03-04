'use client'

import React, { Fragment, useEffect, useState } from 'react'
import {
  AiOutlineCloudServer,
  AiOutlineDelete,
  AiOutlineDown,
  AiOutlinePlus,
} from 'react-icons/ai'

import LayoutCustom from '@/layouts/layoutCustom'
import { Dialog, Disclosure, Tab, Transition } from '@headlessui/react'
import Image from 'next/image'
import Shopify from '../../public/shopify.png'
import Youtube from '../../public/youtube.png'

import Theme from '../../public/themes.jpg'
import Edit from '../../public/edit.jpg'
import Liquid from '../../public/liquid.jpg'
import Parametre from '../../public/parametre.jpg'
import Commande from '../../public/commande.jpg'
import PaiementPage from '../../public/paiementPage.jpg'
import Modal from '@/components/atoms/modal/modal'
import Card from '@/components/atoms/card/card'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { api } from '@/config/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import copy from 'clipboard-copy'
import { toast } from 'react-toastify'
import { AxiosResponse } from 'axios'
import { parseCookies } from 'nookies'
import { useAuth } from '@/context/AuthContext'
import { getCookie } from 'cookies-next'
import { useLanguage } from '@/context/LanguageContext'

const fetchShopifyStore = async (userId: any) => {
  const response: AxiosResponse = await api.get(`stores/user/${userId}/stores`)
  return response
}

const Page = () => {
  const { translations } = useLanguage()

  const { isAuthenticated } = useAuth()

  const queryClient = useQueryClient()

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenSecond, setIsOpenSecond] = useState(false)
  const [isOpenWidget, setIsOpenWidget] = useState(false)
  const [isOpenShopify, setIsOpenShopify] = useState(false)
  const [isCardVisible, setCardVisible] = useState(true)
  const [selectedTab, setSelectedTab] = useState(0)
  const [isOpenSupprimerChatBots, setIsOpenSupprimerChatBots] = useState(false)


  const handleTabClick = (index: number) => setSelectedTab(index)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  const openModalSecond = () => setIsOpenSecond(true)
  const closeModalSecond = () => setIsOpenSecond(false)
  const openModalWidget = () => setIsOpenWidget(true)
  const closeModalWidget = () => setIsOpenWidget(false)
  const openModalShopify = () => setIsOpenShopify(true)
  const closeModalShopify = () => setIsOpenShopify(false)
  const openModalSupprimerChatBots = () => setIsOpenSupprimerChatBots(true)
  const closeModalSupprimerChatBots = () => setIsOpenSupprimerChatBots(false)

  const [copied1, setCopied1] = useState(false)

  const handleCopyClick1 = async () => {
    try {
      if (typeof window !== 'undefined') {
        const code1: any = document.getElementById('code1')?.textContent
        await copy(code1)
        setCopied1(true)
        toast.success('Code 1 copied to clipboard')
      }
    } catch (error) {
      toast.error('Failed to copy code 1')
    }
  }

  const tabClasses = (index: number): string =>
    `inline-block w-full p-4 rounded-tl-lg focus:outline-none ${
      index === selectedTab ? 'bg-indigo-100' : 'bg-gray-50'
    }`

  const scrapeMutation = useMutation(
    (data: any) => api.post('products/scrape', data),
    {
      onSuccess: (data: any) => {
        toast(`Boutique ajouté`, { position: toast.POSITION.BOTTOM_CENTER })
        closeModalSecond()
      },
      onError: (error: any): void => {
          throw new Error('error', error)
      },
    },
  )

  const shopMutation = useMutation(
    (data: any) => api.post('stores/shopify-store', data),
    {
      onSuccess: (data) => {
        toast(`Boutique creer`, { position: toast.POSITION.BOTTOM_CENTER })
      },
      onError: (error: any): void => {
          throw new Error('error', error)
      },
    },
  )

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const { url } = event.target.elements
    const userId: any = parseCookies()['userId']

    const requestData = {
      url: url.value,
      user_id: userId,
    }

    const hostname = new URL(url?.value).hostname
    const domain = hostname.replace('www.', '').split('.')[0]

    const createUrlData = {
      url: domain,
      user_id: userId,
    }

    scrapeMutation.mutateAsync(requestData)
    shopMutation.mutateAsync(createUrlData)
  }

  const getScrapeMutation = useMutation(
    (data: any) => api.get(`stores/user/${data}/stores`),
    {
      onSuccess: (data: any) => {
        queryClient.invalidateQueries(['shopifyStore'])
      },
      onError: (error: any): void => {
          throw new Error('error', error)
      },
    },
  )

  const { data: shopifyStore, isLoading } = useQuery({
    queryKey: ['shopifyStore'],
    queryFn: () => fetchShopifyStore(parseCookies()['userId']),
    enabled: Boolean(getCookie('access_token')),
  })

  const deleteShopifyStoreMutation = useMutation({
    mutationFn: (id: any) => api.delete(`stores/stores/${id}`),
    onSuccess: (data) => {
      toast(`Boutique supprimé`, { position: toast.POSITION.BOTTOM_CENTER })
      queryClient.invalidateQueries(['shopifyStore'])
      closeModalSupprimerChatBots()
    },
    onError: (error: any): void => {
        throw new Error('error', error)
    },
  })

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = getCookie('access_token')

      if (isAuthenticated && accessToken) {
        await getScrapeMutation.mutateAsync(parseCookies()['userId'])
      }
    }

    fetchData()
  }, [isAuthenticated, parseCookies()['userId']])

  return (
    <LayoutCustom>
        <div className='w-full overflow-y-auto'>
          {isCardVisible ? (
            <Card>
              <div className='mt-[2%] w-full p-4 text-center bg-indigo-200 rounded-lg shadow sm:p-8'>
                <div className='flex items-center justify-between border-b border-gray-200'>
                  <span className='font-bold text-gray-900'>{ translations.MY_CHATBOTS }</span>
                  <button
                    onClick={openModalSecond}
                    className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.775rem] shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    <AiOutlinePlus className='-ml-0.5 mr-1.5 h-5 w-5' />
                    Créer un nouveau chatbot
                  </button>
                </div>
                <Modal isOpen={isOpenSecond} closeModal={closeModalSecond}>
                  <div
                    className=' max-w-xl px-20 py-8 m-20 overflow-hidden bg-white rounded-lg shadow-xl 2xl:max-w-2xl'>
                    <form className='mx-auto' onSubmit={handleSubmit}>
                      <input
                        type='hidden'
                        name='authenticity_token'
                        value='Stu6q1xrADvdThGxkoNr3gPfkU8INBlg8uP0bVRqS5wD31CwZCWUIb-a2J1zxyinHPdr54TIm8NeVuf8sFlnBg'
                        autoComplete='off'
                      />
                      <div>
                        <div className='mx-auto flex h-12 w-12 items-center justify-center'>
                          <Image
                            src={Shopify}
                            width='100'
                            height='100'
                            alt=''
                          />
                        </div>
                        <div className='mt-3 text-center sm:mt-5'>
                          <h3
                            className='text-base font-semibold leading-6 text-gray-900'
                            id='modal-title'
                          >
                            {'Connectons votre boutique en ligne !'}
                          </h3>
                          <div className='mt-2'>
                            <p className='text-sm text-gray-500'>
                              Nous analysons les pages de votre site web et générons automatiquement un chatbot en
                              fonction de votre contenu.
                            </p>
                          </div>
                        </div>
                        <div className='w-full mt-4'>
                          <div className='sm:col-span-4'>
                            <div className='mt-2'>
                              <div
                                className='mx-auto flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 '>
                                <input
                                  placeholder='maboutique.com'
                                  name='url'
                                  autoComplete='off'
                                  className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                  type='url'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full mt-10 justify-end flex'>
                        <button
                          type='button'
                          className='inline-flex justify-center shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                          onClick={closeModalSecond}
                        >
                          Fermer
                        </button>
                        <button
                          type='submit'
                          className='inline-flex justify-center shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] mx-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                          Connecter
                        </button>
                      </div>
                    </form>
                  </div>
                </Modal>
                <div className='mt-[2%] bg-white rounded-lg '>
                  {
                    isLoading ? <p>Loading...</p> :
                      shopifyStore && shopifyStore.data.map((item: any) => {
                        return (
                          <div className='flex justify-between gap-8 p-6' key={item.id}>
                            <div className='m-auto'>
                              <dd className='text-black text-[0.775rem]'>
                                {item.url}
                              </dd>
                            </div>
                            <div className='m-auto'>
                              <button
                                id='installer-tab'
                                onClick={() => setCardVisible(false)}
                                className='inline-flex items-center shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] rounded-md bg-indigo-600 px-3 py-2 text-[0.675rem] font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                              >
                                <AiOutlineCloudServer className='-ml-0.5 mr-1.5 h-5 w-5' />
                                Installer
                              </button>
                            </div>
                            <div className='m-auto'>
                              <AiOutlineDelete
                                className='-ml-0.5 mr-1.5 h-5 w-5 text-red-400'
                                onClick={openModalSupprimerChatBots}
                              />
                              <Transition appear show={isOpenSupprimerChatBots} as={Fragment}>
                                <Dialog as='div' className='relative z-10' onClose={closeModalSupprimerChatBots}>
                                  <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0'
                                                    enterTo='opacity-100' leave='ease-in duration-200'
                                                    leaveFrom='opacity-100' leaveTo='opacity-0'>
                                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                                  </Transition.Child>
                                  <div className='fixed inset-0 overflow-y-auto'>
                                    <form onSubmit={handleSubmit}
                                          className='flex min-h-full items-center justify-center p-4 text-center'>
                                      <Transition.Child as={Fragment} enter='ease-out duration-300'
                                                        enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100'
                                                        leave='ease-in duration-200' leaveFrom='opacity-100 scale-100'
                                                        leaveTo='opacity-0 scale-95'>
                                        <Dialog.Panel
                                          className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6  align-middle shadow-xl transition-all'>
                                          <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                                            Etes-vous sûr de vouloir supprimer ce chatbot ?
                                          </Dialog.Title>
                                          <div className='mt-2 overflow-auto max-h-[50vh]'>
                                            <div className='mt-4 justify-between'>
                                              <button
                                                type='button'
                                                className='inline-flex shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                                onClick={() => deleteShopifyStoreMutation.mutateAsync(item.id)}>
                                                Oui
                                              </button>
                                              <button
                                                type='submit'
                                                className='mx-2 inline-flex shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                                onClick={closeModalSupprimerChatBots}
                                              >
                                                Non
                                              </button>
                                            </div>
                                          </div>
                                        </Dialog.Panel>
                                      </Transition.Child>
                                    </form>
                                  </div>
                                </Dialog>
                              </Transition>
                            </div>
                          </div>
                        )
                      })
                  }
                </div>
              </div>
            </Card>
          ) : (
            <div
              className=' p-4 bg-indigo-200 rounded-lg md:p-8'
              id='installer'
            >
              <div className='w-full bg-white border border-gray-200 rounded-lg shadow'>
                <Tab.Group>
                  <div
                    className='bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
                    <Tab.List
                      className='text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex'>
                      <Tab
                        onClick={() => handleTabClick(0)}
                        className={tabClasses(0)}
                      >
                        Instructions pour le widget
                      </Tab>
                      <Tab
                        onClick={() => setCardVisible(true)}
                        className='inline-block w-full p-4 rounded-tl-lg text-white text-l'
                        style={{ backgroundColor: '#7a5eea' }}>
                        Retour
                      </Tab>
                    </Tab.List>
                    <Tab.Panels className='border-t border-gray-200 '>
                      <Tab.Panel className='bg-white rounded-lg md:p-8'>
                        <button
                          onClick={openModalWidget}
                          className='inline-flex items-center rounded-md mb-2 px-3 py-2 text-[0.675rem] font-semibold text-black shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                          <Image
                            src={Shopify}
                            width='15'
                            height='15'
                            alt={''}
                            className='m-1'
                          />
                          Instructions pour Shopify
                        </button>
                        <a
                          href='https://youtu.be/mwezuQz8RBY'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <button
                            className='inline-flex items-center rounded-md mb-2 px-3 py-2 text-[0.675rem] font-semibold text-black shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                            <Image
                              src={Youtube}
                              width='15'
                              height='15'
                              alt={''}
                              className='m-1'
                            />
                            Instructions Shopify
                          </button>
                        </a>
                        <div className='mb-4 mt-4'>
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className='flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-indigo-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                                  <span>Copier le code suivant</span>
                                  <AiOutlineDown
                                    className={`${
                                      open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-indigo-600`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                                  <div className='flex gap-10 '>
                                    <SyntaxHighlighter style={atomDark} id='code1'>
                                      {
                                        '<script src="https://connect.myaichat.io/index.js"></script>'
                                      }
                                    </SyntaxHighlighter>
                                    <button onClick={handleCopyClick1}
                                            className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-[10%]'>
                                      {copied1 ? 'Copié!' : 'Copie'}
                                    </button>
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                        <div className='mb-4 mt-4'>
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className='flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-indigo-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                                  <span>Ajouter le code dans votre page</span>
                                  <AiOutlineDown
                                    className={`${
                                      open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-indigo-600`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                                  <pre>
                                    Collez le code MyAiChat ci-dessous dans votre page.
                                  </pre>
                                  <pre className='mb-4'>
                                    {
                                      'Vous pouvez l\'ajouter dans la section de l\'en-tête / head  HTML.'
                                    }
                                  </pre>
                                  <code>
                                    {
                                      'Si le chatbot ne s\'affiche pas, essayez de vider le cache de votre navigateur. Vous pouvez également contacter notre équipe d\'assistance pour obtenir de l\'aide supplémentaire.'
                                    }
                                  </code>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                        <div className='mb-4 mt-4'>
                          <div
                            className='flex p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50'
                            role='alert'
                          >
                            <svg
                              aria-hidden='true'
                              className='flex-shrink-0 inline w-5 h-5 mr-3'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fill-rule='evenodd'
                                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                                clip-rule='evenodd'
                              ></path>
                            </svg>
                            <span className='sr-only'>Info</span>
                            <div>
                              <span className='font-medium'>Attention !</span>
                              {
                                'Si vous avez besoin d\'aide, veuillez nous contacter à l\'adresse suivante :'
                              }
                              <b className='font-medium'>
                                {' '}
                                contact@myaichat.io
                              </b>
                            </div>
                          </div>
                        </div>
                      </Tab.Panel>
                    </Tab.Panels>
                  </div>
                </Tab.Group>
              </div>
            </div>
          )}
        </div>
        <Modal isOpen={isOpenWidget} closeModal={closeModalWidget}>
          <div className=' max-w-xl px-8 py-8 m-20 overflow-hidden bg-white rounded-lg shadow-xl 2xl:max-w-2xl'>
            <div
              className='flex justify-start space-x-4'
            >
              <button
                type='button'
                className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                onClick={closeModalWidget}
              >
                Fermer
              </button>
            </div>
            <div className='flex flex-wrap mt-4'>
              <div className='w-full text-left px-4'>
                <span className='text-[20px] text-center font-medium leading-6 text-gray-900'>
                  {
                    'Ces instructions s\'adressent uniquement aux utilisateurs de Shopify'
                  }
                </span>
                <p className='mb-2 mt-6'>1. Copiez le code suivant</p>
                <p>
                  {
                    '<script src="https://connect.myaichat.io/index.js"></script>'
                  }
                </p>

                <p className='mb-2 mt-6'>{'2. Allez dans shopify > Theme.'}</p>
                <Image
                  className='m-auto pt-3 mb-8'
                  src={Theme}
                  alt={''}
                  width={300}
                  height={250}
                />
              </div>
              <div className='w-full text-left px-4'>
                <p className='mb-2 mt-2'>{'3. Cliquez sur "Code".'}</p>
                <Image
                  className='m-auto pt-3 mb-8'
                  src={Edit}
                  alt={''}
                  width={300}
                  height={250}
                />
              </div>
              <div className='w-full text-left px-4'>
                <p className='mb-2'>{'4. Ouvrez le fichier \'theme.liquid\''}</p>
                <code className='mt-4'>
                  {
                    'Collez le code entre les balises <head>MyAichat Script </head>'
                  }
                </code>
                <Image
                  className='m-auto pt-3'
                  src={Liquid}
                  alt={''}
                  width={300}
                  height={250}
                />
              </div>
            </div>
          </div>
        </Modal>
        <Modal isOpen={isOpenShopify} closeModal={closeModalShopify}>
          <div className=' max-w-xl px-8 py-8 m-20 overflow-hidden bg-white rounded-lg shadow-xl 2xl:max-w-2xl'>
            <div className='flex justify-start space-x-4'>
              <button
                type='button'
                className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                onClick={closeModalWidget}
              >
                Fermer
              </button>
            </div>
            <div className='flex flex-wrap mt-4'>
              <div className='w-full text-left px-4'>
                <span className='text-[20px] text-center font-medium leading-6 text-gray-900'>
                  {
                    'Ces instructions s\'adressent uniquement aux utilisateurs de Shopify.'
                  }
                </span>
                <p className='mb-2 mt-6'>1. Copiez le code suivant</p>
                <code>zazoazkazljzlajzlazjalzjal</code>

                <p className='mb-2 mt-6'>
                  {'2. Allez dans shopify > parametres.'}
                </p>
                <Image
                  className='m-auto pt-3 mb-8'
                  src={Parametre}
                  alt={''}
                  width={300}
                  height={250}
                />
              </div>
              <div className='w-full text-left px-4'>
                <p className='mb-2 mt-2'>
                  {'3. Cliquez sur Page de payment.'}
                </p>
                <Image
                  className='m-auto pt-3 mb-8'
                  src={PaiementPage}
                  alt={''}
                  width={300}
                  height={250}
                />
              </div>
              <div className='w-full text-left px-4'>
                <p className='mb-2'>
                  {
                    '4. Faites défiler la page jusqu\'à ce que vous trouviez l\'état de la page "page de statut de commande".'
                  }
                </p>
                <code className='mt-4'>
                  {
                    'Collez le code dans la section "Scripts supplémentaires" et cliquez sur "Sauvegarder".'
                  }
                </code>
                <Image
                  className='m-auto pt-3'
                  src={Commande}
                  alt=''
                  width={300}
                  height={250}
                />
              </div>
            </div>
          </div>
        </Modal>
    </LayoutCustom>
  )
}

export default Page
