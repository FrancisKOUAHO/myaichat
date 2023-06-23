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
import ReportForm from "../ReportForm/ReportForm";
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
  );
};

export default Sidebar;
