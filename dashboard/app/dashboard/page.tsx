"use client"

import React, {useState} from "react";
import {AiOutlinePlus,AiOutlineFolderAdd,AiOutlineCloseCircle,AiOutlineEye,AiOutlineEdit,AiOutlineDelete,AiOutlineCloudServer} from "react-icons/ai";
import LayoutCustom from "@/layouts/layoutCustom";
import {Modal} from "../../components/atoms/modal/modal";
import {Card} from "../../components/atoms/card/card";
import Image from "next/image";
import Shopify from "../../public/shopify.png";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCardVisible, setCardVisible] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <LayoutCustom>
      <div className="w-full overflow-y-auto hidden">
        {/*<h2>{"Bilan d'affaires"}</h2>*/}
        <div className="p-40 mx-auto">
          <div className="text-center">
            <AiOutlineFolderAdd className="mx-auto h-12 w-12 text-gray-400 "/>
            <h3 className="mt-2 text-sm font-semibold text-gray-900">{"Vous n'avez pas encore de ChatBot"}</h3>
            <p className="mt-1 text-sm text-gray-500">Commencez par créer votre premier ChatBot</p>
            <div className="mt-6">
              <div>
                <button  onClick={openModal} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.775rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                 <AiOutlinePlus className="-ml-0.5 mr-1.5 h-5 w-5"/>
                  Créer un nouveau chat
                </button>
                <Modal isOpen={isOpen} closeModal={closeModal}>
                  <div className=" max-w-xl px-20 py-8 m-20 overflow-hidden bg-white rounded-lg shadow-xl 2xl:max-w-2xl">
                    <div className="flex justify-start space-x-4">
                      <button onClick={closeModal} className="text-gray-600 focus:outline-none hover:text-gray-700">
                        <AiOutlineCloseCircle/>
                      </button>
                    </div>
                    <form id="submit-url" className="mx-auto" data-turbo="false"
                          data-action="submit->chats-new#validateUrl" action="/add_shop" accept-charset="UTF-8"
                          method="post"><input type="hidden" name="authenticity_token"
                                               value="Stu6q1xrADvdThGxkoNr3gPfkU8INBlg8uP0bVRqS5wD31CwZCWUIb-a2J1zxyinHPdr54TIm8NeVuf8sFlnBg"
                                               autoComplete="off"/>
                      <div>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center">
                          <Image
                              src={Shopify} width="100" height="100" alt={''}/>
                        </div>
                        <div className="mt-3 text-center sm:mt-5">
                          <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                            Connectons
                            votre magasin !
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Nous parcourons les pages de votre site web et créons automatiquement un chatbot à partir de votre contenu.
                              automatiquement un chatbot à partir de votre contenu.
                            </p>
                          </div>
                        </div>
                        <div className="w-full mt-4">
                          <div className="sm:col-span-4">
                            <div className="mt-2">
                              <div
                                  className="mx-auto flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                <input placeholder="myshop" name="shop" autoComplete="off"
                                       className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                       data-chats-new-target="urlInput" type="text" id="shop"/>
                                  <span
                                      className="flex select-none items-center pr-3 text-gray-500 sm:text-sm">.myshopify.com</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full mt-10 justify-end flex">
                        <button name="button" type="submit"
                                className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                data-chats-new-target="submitButton" data-controller="loading-button"
                                data-loading-button-target="submit">
                          Connecter
                        </button>
                      </div>
                    </form>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full overflow-y-auto">
        {isCardVisible ? (
        <Card >
        <div className="mt-[2%] w-full p-4 text-center bg-white bg-indigo-200  rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between border-b border-gray-200">
            <span className="font-bold text-gray-900 dark:text-white">My Chatbots</span>
            <a href="#" className="text-white bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Créer un
              nouveau chatbot
            </a>
          </div>
          <div className="mt-[2%] bg-white rounded-lg  dark:bg-gray-800">
            <div className="flex justify-between  gap-8 p-6 ">
              <div className="m-auto">
                <dt className="mb-2 font-bold text-[0.775rem]">MyShootBox</dt>
                <dd className="text-gray-500 dark:text-gray-400 text-[0.775rem]">myshootbox.com</dd>
              </div>
              <div className="m-auto">
                <dd className="text-gray-500 dark:text-gray-400 text-[0.775rem]">Pages : 9</dd>
              </div>
              <div className="m-auto">
                <button  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <AiOutlineEye className="-ml-0.5 mr-1.5 h-5 w-5"/>
                  Visualiser
                </button>
              </div>
              <div className="m-auto">
                <button id="installer-tab" onClick={() => setCardVisible(false)} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <AiOutlineCloudServer className="-ml-0.5 mr-1.5 h-5 w-5"/>
                  Installer
                </button>
              </div>
              <div className="m-auto">
                <button  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <AiOutlineEdit className="-ml-0.5 mr-1.5 h-5 w-5"/>
                  Personaliser
                </button>
              </div>
              <div className="m-auto">
                <dt className="mb-2  font-extrabold text-[0.775rem]">Active</dt>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer"/>
                  <div
                      className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className="m-auto">
                <AiOutlineDelete className="-ml-0.5 mr-1.5 h-5 w-5 text-red-400"/>
              </div>
            </div>
          </div>
        </div>
      </Card>
        ) : (
        <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="installer">
          <button id="retour-tab" onClick={() => setCardVisible(true)} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <AiOutlineCloudServer className="-ml-0.5 mr-1.5 h-5 w-5"/>
            Retour
          </button>

          <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the
            world’s potential</h2>
          <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
            <li className="flex space-x-2">
              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
              </svg>
              <span className="leading-tight">Dynamic reports and dashboards</span>
            </li>
            <li className="flex space-x-2">
              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
              </svg>
              <span className="leading-tight">Templates for everyone</span>
            </li>
            <li className="flex space-x-2">
              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
              </svg>
              <span className="leading-tight">Development workflow</span>
            </li>
            <li className="flex space-x-2">
              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
              </svg>
              <span className="leading-tight">Limitless business automation</span>
            </li>
          </ul>
        </div>
        )}
      </div>
    </LayoutCustom>
  )
}

export default Page
