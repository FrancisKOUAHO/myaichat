'use client'

import React, { Fragment, FunctionComponent, useState } from 'react'
import {
  AiOutlineCreditCard,
  AiOutlineFileSync,
  AiOutlineHome,
  AiOutlineIssuesClose,
  AiOutlineMail,
  AiOutlineShop,
  AiOutlineSetting,
} from 'react-icons/ai'
import Link from 'next/link'
import SidebarProps from '@/types/SidebarProps'
import ReportForm from '../ReportForm/ReportForm'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/config/api'
import { useAuth } from '@/context/AuthContext'
import { toast } from 'react-toastify'
import { useLanguage } from '@/context/LanguageContext'

const Sidebar: FunctionComponent<SidebarProps> = ({}) => {
  const { translations } = useLanguage()
  const { user } = useAuth()

  const [image, setImage] = useState<File | null>(null)
  const [message, setMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const SendRapport = useMutation(
    (formData: FormData) => api.post('rapport', formData),
    {
      onSuccess: (data) => {
        toast(`Message envoyé`, { position: toast.POSITION.BOTTOM_CENTER })
      },
      onError: (error) => {
        toast(`Réessayer d'envoyer le message`, { position: toast.POSITION.BOTTOM_CENTER })
      },
    },
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    if (image) {
      formData.append('image', image)
    }
    formData.append('message', message)
    formData.append('email', user.email)
    SendRapport.mutate(formData)

    setImage(null)
    setMessage('')

    closeModal()
  }

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setMessage(event.target.value)
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0])
    }
  }

  console.log('translations', translations)

  return (
    <>
      {
        <div className='c-sidebar'>
          <p className='text-xs font-medium text-gray-400 pt-4 mb-2 pl-4'>
            {translations.MAIN_MENU.toUpperCase()}
          </p>
          <Link href='/dashboard' className='hover:text-[#7a5eea]'>
            <AiOutlineHome />
            {translations.DASHBOARD}
          </Link>
          <Link href='/dashboard/analytics' className='hover:text-[#7a5eea]'>
            <AiOutlineFileSync />
            {translations.STATISTICS}
          </Link>
          <Link href='/dashboard/knowledge' className='hover:text-[#7a5eea]'>
            <AiOutlineShop />
            {translations.KNOWLEDGE_BASE}
          </Link>
          <Link href='/dashboard/parametre' className='hover:text-[#7a5eea]'>
            <AiOutlineSetting />
            {translations.SETTINGS}
          </Link>
          <p className='text-xs font-medium text-gray-400 pt-4 mb-2 mt-2 pl-4'>
            {translations.SETTINGS.toUpperCase()}
          </p>
          <Link href='/dashboard/account' className='hover:text-[#7a5eea]'>
            <AiOutlineCreditCard />
            {translations.MY_ACCOUNT}
          </Link>
          <p className='text-xs font-medium text-gray-400 pt-4 mb-2 mt-2 pl-4'>
            {'OBTENIR DE L\'AIDE'}
          </p>
          <a
            href='mailto:contact@myaichat.io'
            target='_blank'
            className='mb-2 text-slate-500 text-xs group cursor-pointer flex items-center hover:text-[#7a5eea]'
          >
            <AiOutlineMail />
            {translations.EMAIL}
          </a>

          <a>
            <button onClick={openModal}>
              <div className='mb-2 text-xs group cursor-pointer flex items-center hover:text-[#7a5eea]'>
                <AiOutlineIssuesClose />
                {translations.GET_HELP}
              </div>
            </button>
            <ReportForm
              isModalOpen={isModalOpen}
              closeModal={closeModal}
              handleSubmit={handleSubmit}
              message={message}
              handleMessageChange={handleMessageChange}
              image={image}
              handleImageChange={handleImageChange}
            />
          </a>
        </div>
      }
    </>
  )
}

export default Sidebar
