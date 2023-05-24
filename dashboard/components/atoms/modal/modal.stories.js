import Modal from "./modal";
import {useState} from "react";
import Input from "../input/input";
import {Button} from "../button/button";


export const BasicModal = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
            </div>
            <Modal closeModal={closeModal} openModal={openModal} isOpen={isOpen} name={'Modal'}/>
        </>
    )
}

export const FormulaireModal = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
            </div>
            <Modal closeModal={closeModal} openModal={openModal} isOpen={isOpen} name="Enregistrer un partenaire">
                <div className="c-modal-form">
                    <div className="container-form">
                        <div>
                            <div className="content-input">
                                <label>
                                    Partenaires
                                </label>
                                <Input className="c-input" type="text"  placeholder="Partenaires"/>
                            </div>
                            <div className="content-input">
                                <label>
                                    Nom de la société
                                </label>
                                <Input className="c-input" type="text"  placeholder="Nom de la société"/>
                            </div>
                            <div className="content-input">
                                <label>
                                    Adresse
                                </label>
                                <Input className="c-input" type="text" placeholder="Adresse"/>
                            </div>
                        </div>
                        <div>
                            <div className="content-input">
                                <label>
                                    Ville
                                </label>
                                <Input className="c-input" type="text" placeholder="Ville"/>
                            </div>
                            <div className="content-input">
                                <label>
                                    Code postal
                                </label>
                                <Input className="c-input" type="text"  placeholder=" Code postal"/>
                            </div>
                            <div className="content-input">
                                <label>
                                    Téléphone
                                </label>
                                <Input className="c-input" type="text" placeholder="Télephone"/>
                            </div>
                        </div>
                    </div>
                    <div className="content-button">
                        <Button color={'#FFF'} className="btn-cancel"> Annuler </Button>
                        <Button color={'primary'} isActive="true"> Enregistrer </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default {
    title: "Atoms/BasicModal",
    component: BasicModal,
}
