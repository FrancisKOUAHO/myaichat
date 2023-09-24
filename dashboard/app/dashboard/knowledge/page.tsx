'use client'

import React, { useEffect, useState } from 'react'
import LayoutCustom from '@/layouts/layoutCustom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '@/config/api'
import { getCookie } from 'cookies-next'
import { useLanguage } from '@/context/LanguageContext'
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import { toast } from 'react-toastify'

const Page = () => {
  const { translations } = useLanguage()

  const queryClient = useQueryClient()

  const [userId, setUserId] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isOpenSupprimerChatBots, setIsOpenSupprimerChatBots] = useState(false)

  const openModalSupprimerChatBots = () => setIsOpenSupprimerChatBots(true)
  const closeModalSupprimerChatBots = () => setIsOpenSupprimerChatBots(false)

  useEffect(() => {
    const userIdFromCookie: any = getCookie('userId')
    setUserId(userIdFromCookie)
  }, [])

  const deleteShopifyProductMutation = useMutation({
    mutationFn: (id) => api.delete(`products/products/${id}`),
    onSuccess: () => {
      toast(`produit supprimé`, { position: toast.POSITION.BOTTOM_CENTER })
      queryClient.invalidateQueries(['userProducts', userId])
      closeModalSupprimerChatBots()
    },
    onError: (error) => {
      console.error('error', error)
    },
  })

  const mutation = useMutation<void, Error, FormData>(
    async (formData) => {
      await api.post(`import/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userProducts', userId])
        toast(`Importation réussie`, { position: toast.POSITION.BOTTOM_CENTER })
        setIsLoaded(false)
      },
      onError: () => {
        toast(`Une erreur est survenue lors de l'importation`, { position: toast.POSITION.BOTTOM_CENTER })
        setIsLoaded(false)
      },
    },
  )

  const handleFileChange = (e: any) => {
    const file = e.target.files[0]

    console.log('file', file)

    if (file) {
      setIsLoaded(true)

      const formData = new FormData()
      formData.append('csv_file', file)

      mutation.mutate(formData)
    }
  }

  const {
    data: scrapeData,
    isLoading,
    isError,
  } = useQuery(
    ['userProducts', userId],
    () => api.get(`products/user/${userId}/products`),
    {
      enabled: !!userId,
    },
  )


  return (
    <LayoutCustom>
      <div className='w-full overflow-y-auto'>
        <div className='mt-[2%] w-full p-4 text-center bg-indigo-200  rounded-lg shadow sm:p-8'>
          <div className='flex items-center justify-between border-b border-gray-200'>
            <span className='font-bold text-gray-900'>{translations.DATA_EXTRACTION}</span>
          </div>
          <div className='flex items-center justify-end border-b border-gray-200'>
            <label
              className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.775rem] shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              {isLoaded ? (
                <p className='text-white'>Loading...</p>
              ) : (
                <>
                  <AiOutlinePlus className='-ml-0.5 mr-1.5 h-5 w-5' />
                  Importer
                  <input type='file' name='csv_file' style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                         onChange={handleFileChange} />
                </>
              )}
            </label>
          </div>
          <div className='flex justify-between gap-8 p-6'>
            {isLoading ? (
              <p>{translations.LOADING_TEXT}</p>
            ) : (
              <table className='table w-full text-white border-separate space-y-6 text-sm '>
                <thead className='text-white mt-[2%] rounded-lg'>
                <tr
                  className='shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)]'>
                  <th className='text-left p-3'>Nom du produit</th>
                  <th className='p-3'>{translations.STORE}</th>
                  <th className='p-3'>{translations.PRODUCT_URL}</th>
                  <th className='p-3'>{translations.STATUS}</th>
                  <th className='p-3' style={{ borderRadius: '0 0.625rem 0.625rem 0' }}>Action</th>
                </tr>
                </thead>
                <tbody className='mt-[2%] bg-white'>
                {scrapeData &&
                  scrapeData.data.map((product: any) => {
                    return (
                      <tr key={product.id}>
                        <td className='p-3'>
                          <div className='flex align-items-center'>
                            <div className='ml-3'>
                              <div className='text-black'>{product.title}</div>
                            </div>
                          </div>
                        </td>
                        <td className='p-3'>
                          <div className='flex align-items-center'>
                            <div className='ml-3'>
                              <div className='text-black'>
                                {product.full_url}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='p-3'>
                          <div className='flex align-items-center'>
                            <div className='ml-3'>
                              <div className='text-black'>

                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='p-3'>
                          <span className='bg-green-600 rounded-full inline-block h-3 w-3'></span>
                        </td>
                        <td className='p-3'>
                          <div className='flex align-items-center'>
                            <div className='ml-3'>
                              <div className='text-black'>
                                <AiOutlineDelete
                                  className='-ml-0.5 mr-1.5 h-5 w-5 text-red-400'
                                  onClick={() => {
                                    deleteShopifyProductMutation.mutate(product.id)
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </LayoutCustom>
  )
}

export default Page
