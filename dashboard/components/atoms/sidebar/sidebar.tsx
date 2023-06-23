"use client";

import React, {Fragment, FunctionComponent, useState} from "react";
import {
  AiOutlineCreditCard,
  AiOutlineFileSync,
  AiOutlineHome,
  AiOutlineIssuesClose,
  AiOutlineMail,
  AiOutlineShop,
  AiOutlineSetting,
} from "react-icons/ai";
import Link from "next/link";
import SidebarProps from "@/types/SidebarProps";
import {Dialog, Transition} from "@headlessui/react";
import {useMutation} from "@tanstack/react-query";
import {api} from "@/config/api";
import {useAuth} from "@/context/AuthContext";
import { toast } from "react-toastify";



const Sidebar: FunctionComponent<SidebarProps> = ({}) => {
    const {user} = useAuth();

  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");
 const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    const SendRapport = useMutation(
        (formData: FormData) => api.post("rapport", formData),
        {
            onSuccess: (data) => {
                toast(`Message envoyé`, {position: toast.POSITION.BOTTOM_CENTER});
            },
            onError: (error) => {
                toast(`Réessayer d'envoyer le message`, {position: toast.POSITION.BOTTOM_CENTER});
            },
        }
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        if (image) {
            formData.append("image", image);
        }
        formData.append("message", message);
        formData.append("email", user.email);
        SendRapport.mutate(formData);

        setImage(null);
        setMessage('');

        closeModal();
    };

    const handleMessageChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setMessage(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    };

  return (
    <>
      {
        <div className="c-sidebar">
          <p className="text-xs font-medium text-gray-400 pt-4 mb-2 pl-4">
            MENU PRINCIPAL
          </p>
          <Link href="/dashboard" className="hover:text-[#7a5eea]">
            <AiOutlineHome />
            Tableau de bord
          </Link>
          <Link href="/dashboard/analytics" className="hover:text-[#7a5eea]">
            <AiOutlineFileSync />
            Statistiques
          </Link>
          <Link href="/dashboard/knowledge" className="hover:text-[#7a5eea]">
            <AiOutlineShop />
            Base de connaissances          </Link>
          <Link href="/dashboard/parametre" className="hover:text-[#7a5eea]">
            <AiOutlineSetting />
            Paramètre
          </Link>
          <p className="text-xs font-medium text-gray-400 pt-4 mb-2 mt-2 pl-4">
            PARAMÈTRES
          </p>
          <Link href="/dashboard/offres" className="hover:text-[#7a5eea]">
            <AiOutlineCreditCard />
            Offres
          </Link>
          <p className="text-xs font-medium text-gray-400 pt-4 mb-2 mt-2 pl-4">
            {"OBTENIR DE L'AIDE"}
          </p>
          <a
            href="mailto:contact@myaichat.io"
            target="_blank"
            className="mb-2 text-slate-500 text-xs group cursor-pointer flex items-center hover:text-[#7a5eea]"
          >
            <AiOutlineMail />
            contact@myaichat.io
          </a>

          <a>
            <button onClick={openModal} >
              <div className="mb-2 text-xs group cursor-pointer flex items-center hover:text-[#7a5eea]">
                <AiOutlineIssuesClose />
                Signaler un problème
              </div>
            </button>
            <Transition appear show={isModalOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
                                  enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100"
                                  leaveTo="opacity-0">
                  <div className="fixed inset-0 bg-black bg-opacity-25"/>
                </Transition.Child>
                <form onSubmit={handleSubmit} className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child as={Fragment} enter="ease-out duration-300"
                                      enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                                      leave="ease-in duration-200" leaveFrom="opacity-100 scale-100"
                                      leaveTo="opacity-0 scale-95">
                      <Dialog.Panel
                          className="w-full max-w-[42rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            Soumettez votre problème ou posez une question
                        </Dialog.Title>
                        <div className="space-y-12 mt-10">
                          <div className="w-full">
                            <textarea
                                value={message}
                                onChange={handleMessageChange}
                                className="h-[160px] p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6"
                                placeholder="Décrivez votre problème ou posez-nous une question :">
                            </textarea>
                          </div>
                          <div className="col-span-full mt-10">
                            <label htmlFor="issue_picture"
                                   className="block text-sm font-medium leading-6 text-gray-900">Joindre une image</label>
                            <div className="mt-2 flex items-center gap-x-3">
                              <input accept="image/*"
                                     className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                     type="file"
                                     name="image"
                                     onChange={handleImageChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 justify-between">
                          <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModal}
                          >
                            Fermer
                          </button>
                          <button type="submit"  className="mx-2 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            Envoyer
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </form>
              </Dialog>
            </Transition>
          </a>
        </div>
      }
    </>
  );
};

export default Sidebar;
