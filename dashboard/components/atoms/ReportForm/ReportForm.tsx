import React, { Fragment, FunctionComponent, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ReportFormProps {
    isModalOpen: boolean;
    closeModal: () => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    message: string;
    handleMessageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    image: File | null;
    handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReportForm: FunctionComponent<ReportFormProps> = ({
                                                            isModalOpen,
                                                            closeModal,
                                                            handleSubmit,
                                                            message,
                                                            handleMessageChange,
                                                            image,
                                                            handleImageChange,
                                                        }) => {
    return (
        <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <form onSubmit={handleSubmit} className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-[42rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                                    Soumettez votre problème ou posez une question
                                </Dialog.Title>
                                <div className="space-y-12 mt-10">
                                    <div className="w-full">
                    <textarea
                        value={message}
                        onChange={handleMessageChange}
                        className="h-[160px] p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="Décrivez votre problème ou posez-nous une question :"
                    />
                                    </div>
                                    <div className="col-span-full mt-10">
                                        <label
                                            htmlFor="issue_picture"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Joindre une image
                                        </label>
                                        <div className="mt-2 flex items-center gap-x-3">
                                            <input
                                                accept="image/*"
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
                                    <button
                                        type="submit"
                                        className="mx-2 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    >
                                        Envoyer
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </form>
            </Dialog>
        </Transition>
    );
};

export default ReportForm;