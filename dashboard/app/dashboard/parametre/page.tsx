'use client'

import React, {Fragment, useState} from 'react'
import LayoutCustom from '@/layouts/layoutCustom'
import {AiOutlineDelete, AiOutlineEdit, AiOutlineEye} from 'react-icons/ai'
import {Dialog, Transition} from '@headlessui/react'
import {QueryClient, useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {api} from '@/config/api'
import {getCookie} from 'cookies-next'
import {toast} from 'react-toastify'
import {AxiosResponse} from 'axios'
import Select from 'react-select'
import {useLanguage} from '@/context/LanguageContext'

const getScrapeMutation = async (data: any) => {
    const response: AxiosResponse = await api.get(`stores/user/${data}/stores`)
    return response
}

const Page = () => {
    const queryClient: QueryClient = useQueryClient()
    const {translations} = useLanguage()

    const [isOpenVisualiser, setIsOpenVisualiser] = useState(false)
    const [isOpenModifier, setIsOpenModifier] = useState(false)
    const [isOpenSupprimer, setIsOpenSupprimer] = useState(false)
    const [content, setContent] = useState('')


    const prompts = [
        {value: 'support-chat', label: 'Support chat'},
        {value: 'ventes', label: 'Ventes'},
        {value: 'marketing', label: 'Marketing'},
        {value: 'ressources-humaines', label: 'Ressources humaines'},
        {value: 'blogueur', label: 'Blogueur'},
        {value: 'comptable', label: 'Comptable'},
    ]

    const openModalVisualiser = () => setIsOpenVisualiser(true)
    const closeModalVisualiser = () => setIsOpenVisualiser(false)
    const openModalModifier = () => setIsOpenModifier(true)
    const closeModalModifier = () => setIsOpenModifier(false)
    const openModalSupprimer = () => setIsOpenSupprimer(true)
    const closeModalSupprimer = () => setIsOpenSupprimer(false)

    const updateStoreMutation = useMutation(
        (data: any) => api.put(`stores/${data.id}`, {content: data.content}),
        {
            onSuccess: (data: any) => {
                queryClient.invalidateQueries(['shopifyStore'])
                toast(`Boutique créée`, {position: toast.POSITION.BOTTOM_CENTER})
            },
            onError: (error: any) => {
                throw new Error('error', error)
            },
        },
    )

    const {data: shopifyStore, isLoading} = useQuery({
        queryKey: ['shopifyStore', getCookie('userId')],
        queryFn: () => getScrapeMutation(getCookie('userId')),
        enabled: Boolean(getCookie('userId')),
    })

    const deleteStoreMutation = useMutation({
        mutationFn: (id: any) => api.delete(`stores/stores/${id}`),
        onSuccess: (data) => {
            toast(`Boutique supprimée`, {position: toast.POSITION.BOTTOM_CENTER})
            queryClient.invalidateQueries(['shopifyStore'])
            closeModalSupprimer()
        },
        onError: (error: any): void => {
            throw new Error('error', error)        },
    })

    const updateSelectChangeMutation = useMutation(
        (data: any) => api.put(`stores/update-role/${data.id}`, {role: data.value}),
        {
            onSuccess: (data: any) => {
                queryClient.invalidateQueries(['shopifyStore'])
                toast(`Le rôle a été ajouté`, {position: toast.POSITION.BOTTOM_CENTER})
            },
            onError: (error: any) => {
                throw new Error('error', error)
            },
        },
    )

    return (
        <LayoutCustom>
            <div className='w-full h-[100vh]'>
                <div className='mt-[2%] w-full p-4 text-center bg-indigo-200  rounded-lg shadow sm:p-8'>
                    <div className='flex items-center justify-between border-b border-gray-200'>
                        <span className='font-bold text-gray-900'>
                          Paramètres de mes boutiques
                        </span>
                    </div>
                    <div className='flex justify-between gap-8 p-6 w-full'>
                        <table className='table w-full text-gray-400 border-separate space-y-6 text-sm'>
                            <thead className='text-white mt-[2%] bg-indigo-200 rounded-lg w-full'>
                            <tr
                                className='shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] w-full'>
                                <th className='p-3'>{translations.STORE}</th>
                                <th className='p-3'>{translations.CONTENT}</th>
                                <th className='p-3' style={{
                                    borderRadius: '0 0.625rem 0.625rem 0',
                                }}>Action
                                </th>
                            </tr>
                            </thead>
                            <tbody className='mt-[2%] bg-white'>
                            {
                                isLoading ? translations.LOADING_TEXT :
                                    shopifyStore && shopifyStore.data.map((shop: any) => {
                                        return (
                                            <tr className='bg-white' key={shop.id}>
                                                <td className='p-3'>
                                                    <div className='m-auto'>
                                                        <dd className='text-gray-500 text-[0.775rem]'>
                                                            {shop.url}
                                                        </dd>
                                                    </div>
                                                </td>
                                                <td className='p-3'>
                                                    <p
                                                        className='text-gray-500 text-[0.775rem] overflow-hidden overflow-ellipsis whitespace-nowrap w-44 text-center'>
                                                        {shop.content}
                                                    </p>
                                                </td>
                                                <td colSpan={2}
                                                    className='p-3 flex items-center justify-center gap-2 w-full'>
                                                    <button onClick={openModalVisualiser}
                                                            className='inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                                                        <AiOutlineEye className='-ml-0.5 mr-1.5 h-5 w-5'/>
                                                        Visualiser
                                                    </button>
                                                    {isOpenVisualiser && (
                                                        <Transition appear show={isOpenVisualiser} as={Fragment}>
                                                            <div className='fixed inset-0 overflow-y-auto'>
                                                                <div
                                                                    className='flex min-h-full items-center justify-center p-4 text-center'>
                                                                    <Transition.Child as={Fragment}
                                                                                      enter='ease-out duration-300'
                                                                                      enterFrom='opacity-0 scale-95'
                                                                                      enterTo='opacity-100 scale-100'
                                                                                      leave='ease-in duration-200'
                                                                                      leaveFrom='opacity-100 scale-100'
                                                                                      leaveTo='opacity-0 scale-95'>
                                                                        <div
                                                                            className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                                                            <h3 className='text-lg font-medium leading-6 text-gray-900'>
                                                                                Contenu
                                                                            </h3>
                                                                            <div
                                                                                className='mt-2 overflow-auto max-h-[50vh]'>
																		  <span className='text-sm text-gray-500'>
																			{shop.content}
																		  </span>
                                                                            </div>
                                                                            <div className='mt-4'>
                                                                                <button type='button'
                                                                                        className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                                                                        onClick={closeModalVisualiser}>
                                                                                    Fermer
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </Transition.Child>
                                                                </div>
                                                            </div>
                                                        </Transition>
                                                    )}
                                                    <button onClick={openModalModifier}
                                                            className='inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                                                        <AiOutlineEdit className='-ml-0.5 mr-1.5 h-5 w-5'/>
                                                        Modifier
                                                    </button>
                                                    <Transition appear show={isOpenModifier} as={Fragment}>
                                                        <Dialog as='div' className='relative z-10'
                                                                onClose={closeModalModifier}>
                                                            <Transition.Child as={Fragment} enter='ease-out duration-300'
                                                                              enterFrom='opacity-0'
                                                                              enterTo='opacity-100'
                                                                              leave='ease-in duration-200'
                                                                              leaveFrom='opacity-100'
                                                                              leaveTo='opacity-0'>
                                                                <div className='fixed inset-0 bg-black bg-opacity-25'/>
                                                            </Transition.Child>
                                                            <div className='fixed inset-0 overflow-y-auto'>
                                                                <div
                                                                    className='flex min-h-full items-center justify-center p-4 text-center'>
                                                                    <Transition.Child as={Fragment}
                                                                                      enter='ease-out duration-300'
                                                                                      enterFrom='opacity-0 scale-95'
                                                                                      enterTo='opacity-100 scale-100'
                                                                                      leave='ease-in duration-200'
                                                                                      leaveFrom='opacity-100 scale-100'
                                                                                      leaveTo='opacity-0 scale-95'>
                                                                        <Dialog.Panel
                                                                            className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                                                            <Dialog.Title as='h3'
                                                                                          className='text-lg font-medium leading-6 text-gray-900'>
                                                                                Contenu
                                                                            </Dialog.Title>
                                                                            <div
                                                                                className='mt-2 overflow-auto max-h-[50vh]'>
                                          									<textarea
                                                                                className='text-sm text-black w-full border-2 border-black'
                                                                                value={content}
                                                                                onChange={(event) => setContent(event.target.value)}
                                                                                placeholder="Décrivez votre boutique pour le bot afin qu'il puisse comprendre et communiquer efficacemente.">
																			</textarea>
                                                                            </div>
                                                                            <div className='mt-4 justify-between'>
                                                                                <button
                                                                                    type='button'
                                                                                    className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                                                                    onClick={closeModalModifier}
                                                                                >
                                                                                    Fermer
                                                                                </button>
                                                                                <button
                                                                                    onClick={(event) => {
                                                                                        event.preventDefault()
                                                                                        updateStoreMutation.mutate({
                                                                                            id: shop.id,
                                                                                            content: content,
                                                                                        })
                                                                                        setContent('')
                                                                                        closeModalModifier()
                                                                                    }}
                                                                                    className='mx-2 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                                                                >
                                                                                    Enregistrer
                                                                                </button>
                                                                            </div>
                                                                        </Dialog.Panel>
                                                                    </Transition.Child>
                                                                </div>
                                                            </div>
                                                        </Dialog>
                                                    </Transition>
                                                    <button
                                                        onClick={openModalSupprimer}
                                                        className='inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                                                        <AiOutlineDelete className='-ml-0.5 mr-1.5 h-5 w-5 '/>
                                                        Supprimer
                                                    </button>

                                                    <div className="w-full">
                                                        <Select options={prompts} defaultValue={prompts[0]} name='prompt'
                                                                onChange={(selectedOption, actionMeta) => {
                                                                    if (selectedOption) {
                                                                        updateSelectChangeMutation.mutate({
                                                                            id: shop.id,
                                                                            role: selectedOption.value,
                                                                        });
                                                                    }
                                                                }}
                                                                className="z-10"/>
                                                    </div>

                                                    <Transition appear show={isOpenSupprimer} as={Fragment}>
                                                        <Dialog as='div' className='relative z-10'
                                                                onClose={closeModalSupprimer}>
                                                            <Transition.Child as={Fragment} enter='ease-out duration-300'
                                                                              enterFrom='opacity-0'
                                                                              enterTo='opacity-100'
                                                                              leave='ease-in duration-200'
                                                                              leaveFrom='opacity-100'
                                                                              leaveTo='opacity-0'>
                                                                <div className='fixed inset-0 bg-black bg-opacity-25'/>
                                                            </Transition.Child>
                                                            <div className='fixed inset-0 overflow-y-auto'>
                                                                <div
                                                                    className='flex min-h-full items-center justify-center p-4 text-center'>
                                                                    <Transition.Child as={Fragment}
                                                                                      enter='ease-out duration-300'
                                                                                      enterFrom='opacity-0 scale-95'
                                                                                      enterTo='opacity-100 scale-100'
                                                                                      leave='ease-in duration-200'
                                                                                      leaveFrom='opacity-100 scale-100'
                                                                                      leaveTo='opacity-0 scale-95'>
                                                                        <Dialog.Panel
                                                                            className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6  align-middle shadow-xl transition-all'>
                                                                            <Dialog.Title as='h3'
                                                                                          className='text-lg font-medium leading-6 text-gray-900'>
                                                                                Etes-vous sûr de vouloir supprimer cet
                                                                                boutique ?
                                                                            </Dialog.Title>
                                                                            <div
                                                                                className='mt-2 overflow-auto max-h-[50vh]'>
                                                                                <div className='mt-4 justify-between'>
                                                                                    <button
                                                                                        type='button'
                                                                                        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                                                                        onClick={() => deleteStoreMutation.mutate(shop.id)}
                                                                                    >
                                                                                        Oui
                                                                                    </button>
                                                                                    <button
                                                                                        type='submit'
                                                                                        className='mx-2 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                                                                        onClick={closeModalSupprimer}
                                                                                    >
                                                                                        Non
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </Dialog.Panel>
                                                                    </Transition.Child>
                                                                </div>
                                                            </div>
                                                        </Dialog>
                                                    </Transition>
                                                </td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </LayoutCustom>
    )
}

export default Page
