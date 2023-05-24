'use client'

import {Button} from "@/components/atoms/button/button";
import React, {useState} from "react";
import Input from "@/components/atoms/input/input";
import TextArea from "@/components/atoms/textarea/textArea";
import {toast} from "react-toastify";
import {useCategories} from "@/hooks/useCategories";
import {usePartner} from "@/hooks/usePartner";

const InformationActivity = ({onNext}: { onNext: (values: any) => void }) => {
  const { data: categories } = useCategories()
  const { data: organisators} = usePartner()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values: any = Object.fromEntries(formData.entries());
    await onNext(values);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
      <div
        className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      > {'Informations de l\'activité'}
      </div>
      <div className="mt-5">
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">{'Nom de l\'activité'}</div>
              <div
                className="text-red-500 ml-2 px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
            <div className="mt-3 text-xs leading-relaxed text-slate-500"> Évitez les noms trop long
              {'avec trop d\'informations, et les noms trop court pas assez explicite.'}
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <Input
              className="c-input" name="name"
              type="text" placeholder="Nom de l'activité" required={true}/>
            <div className="text-xs text-slate-500 mt-2 text-right"> Maximum de caractères 0/70</div>
          </div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">{'Durée de l\'activité'}</div>
              <div
                className="text-red-500 ml-2 px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <Input className="c-input" name="duration" placeholder="Exemple: 10 min" required={true}/></div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Companie</div>
              <div
                className="text-red-500 ml-2 px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <select
              name="compagny"
              className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 flex-1"
            >
              {
                organisators && organisators.data.map((organisator: any, index: number) => {
                  return(
                    <option key={index} value={organisator.name_compagny}>{organisator.name_compagny}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Categorie</div>
              <div
                className="text-red-500 ml-2 px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <select
              name="category_id"
              className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 flex-1"
            >
              {
                categories && categories.data.map((category: any, index: number) => {
                  return (
                    <option key={index} value={category.id}>{category.name}</option>
                  )
                })
              }
            </select></div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Organisateur</div>
              <div
                className="text-red-500 ml-2 px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <select
              name="organisator_id"
              className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 flex-1"
            >
              {
                organisators && organisators.data.map((organisator: any, index: number) => {
                  return(
                    <option key={index} value={organisator.id}>{organisator.name_compagny} </option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">{'Adresse de l\'activité'}</div>
              <div
                className="text-red-500 ml-2 px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <Input className="c-input" type="text" name="address" placeholder="Ex: 15 Rue de Paris" required={true}/></div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Ville</div>
              <div
                className="text-red-500 ml-2 px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <Input
              className="c-input flex-1" name="city"
              type="text" placeholder="Ex: Paris" required={true}/></div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
          <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
            <div className="text-left">
              <div className="flex items-center">
                <div className="font-medium">Price</div>
                <div
                  className="text-red-500 ml-2 px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                > Obligatoire
                </div>
              </div>
            </div>
          </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <Input
              className="c-input" name="price"
              type="text" placeholder="14.50 euros" pattern="^[0-9]+([.][0-9]+)?$" required={true}/>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-2 mt-12 md:flex-row">
          <Button color="primary" isActive={true} type="submit">
            Suivant
          </Button>
        </div>
      </div>
    </form>
  )
}

const DetailsActivity = ({onPrevious, onNext}: { onPrevious: () => void, onNext: (values: any) => void }) => {


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    await onNext(values);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
      <div
        className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"> {"Détails de l'activité"}</div>
      <TextArea name="description"
                title="Description de l'activité"
                description="Assurez-vous que la description du produit fournit une explication détaillée de votre produit afin qu'il soit facile de comprendre et de trouver votre produit."
                required={true}
      />
      <TextArea name="programme"
                title="Au programme"
                description="Assurez-vous que la description du produit fournit une explication détaillée de votre produit afin qu'il soit facile de comprendre et de trouver votre produit."
      />
      <TextArea name="cancellation_conditions"
                title="Conditions d'annulation"
                description="Assurez-vous que la description du produit fournit une explication détaillée de votre produit afin qu'il soit facile de comprendre et de trouver votre produit."
      />
      <TextArea name="practical_information"
                title="informations pratiques"
                description="Assurez-vous que la description du produit fournit une explication détaillée de votre produit afin qu'il soit facile de comprendre et de trouver votre produit."
      />

      <div className="flex flex-col justify-between gap-2 mt-12 md:flex-row">
        <Button color="primary" onClick={onPrevious}>
          Précédent
        </Button>
        <Button color="primary" isActive={true} type="submit">
          Suivant
        </Button>
      </div>
    </form>
  )
}

const ActivitySchedule = ({onPrevious, onNext}: { onPrevious: () => void, onNext: (values: any) => void }) => {

  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");

  const [schedule, setSchedule] = useState<{ dates: { date: string, hours: string[] }[] }>({dates: []});



  const handleAddSchedule = (event: any) => {
    event.preventDefault();

    if (!date || !hour) {
      toast(`Veuillez entrer une date et une heure`, {position: toast.POSITION.BOTTOM_CENTER});
      return;
    }

    const newSchedule = {
      date,
      hours: [hour]
    };

    // Vérifiez si une entrée avec la même date existe déjà dans la liste
    const existingEntryIndex = schedule.dates.findIndex(s => s.date === date);

    if (existingEntryIndex !== -1) {
      // Si une entrée existe déjà pour cette date, ajoutez simplement l'heure à la liste des heures
      schedule.dates[existingEntryIndex].hours.push(hour);
      setSchedule({
        dates: [...schedule.dates]
      });
    } else {
      // Sinon, créez une nouvelle entrée avec la date et l'heure
      setSchedule({
        dates: [...schedule.dates, newSchedule]
      });
    }

    // Réinitialiser les valeurs de date et d'heure après la soumission du formulaire
    setDate("");
    setHour("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNext({schedule: schedule.dates});
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
      <div
        className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        {"Horaires de l'activité"}
      </div>
      <div className="mt-5">
        <div className="block sm:flex flex-col items-start pt-2 mt-2 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Variant 1</div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border"
            >
              <div>
                <div className="block sm:flex items-center mt-5 first:mt-0"><label
                  className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right sm:w-20">Date</label>
                  <div className="flex items-center flex-1 xl:pr-20">
                    <div className="flex flex-1"><input className="c-input" value={date} name="date"
                                                        onChange={e => setDate(e.target.value)}
                                                        type="date" placeholder="Size"/>
                      <div
                        className="py-2 px-3 bg-slate-100 border shadow-sm border-slate-200 text-slate-600 dark:bg-darkmode-900/20 dark:border-darkmode-900/20 dark:text-slate-400 rounded-none [&amp;:not(:first-child)]:border-l-transparent first:rounded-l last:rounded-r"
                      >1
                      </div>
                    </div>
                  </div>
                  <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right sm:w-20"
                  >Heure</label>
                  <div className="flex items-center flex-1 xl:pr-20">
                    <div className="flex flex-1"><input
                      value={hour} name="hour" onChange={e => setHour(e.target.value)}
                      className="c-input"
                      type="time" placeholder="Size"/>
                      <div
                        className="py-2 px-3 bg-slate-100 border shadow-sm border-slate-200 text-slate-600 dark:bg-darkmode-900/20 dark:border-darkmode-900/20 dark:text-slate-400 rounded-none [&amp;:not(:first-child)]:border-l-transparent first:rounded-l last:rounded-r"
                      >1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                  <Button color="primary" type="button" onClick={handleAddSchedule}>Ajouter</Button>
                </div>
              </div>
              <pre>{JSON.stringify(schedule, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 mt-12 md:flex-row">
        <Button color="primary" onClick={onPrevious} isActive={true}>
          Précédent
        </Button>
        <Button type="submit" color="primary">Suivant</Button>
      </div>
    </form>
  )
}

const UploadImage = ({onPrevious, onNext, onsubmit}: { onPrevious: () => void, onsubmit: (values: any) => void, onNext: (values: any) => void}) => {
  const [image, setImage] = useState<File>();

  const handleImageChange = (event: any) => {
    if (event.target.files) {
      setImage(event.target.files[0])
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!image) {
      toast(`Veuillez sélectionner une image`, {position: toast.POSITION.BOTTOM_CENTER});
      return;
    }
    onsubmit({image})
  };



  return (
    <form onSubmit={handleSubmit} className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
      <div
        className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
        Télécharger le produit
      </div>
      <div className="mt-5">
        <div className="block sm:flex flex-col items-start mt-10 xl:flex-row"><label
          className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right w-full xl:w-64">
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Photos du produit
              </div>
              <div
                className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"> Required
              </div>
            </div>
            <div className="mt-3 text-xs leading-relaxed text-slate-500">
              <div> {"Le format de l'image est .jpg .jpeg .png et sa taille minimale est de 300 x 300 pixels (pour des images optimales, utilisez une taille minimale de 700 x 700 pixels).\n" +
                "                une taille minimale de 700 x 700 pixels)."}
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400">
            <div className="grid grid-cols-10 gap-5 pl-4 pr-5">
              <div className="relative col-span-5 cursor-pointer md:col-span-2 h-28 image-fit zoom-in">
                {image && (
                  <div>
                    <img className="rounded-md" src={URL.createObjectURL(image)} alt="Uploaded image"/>
                    <span
                      className="cursor-pointer absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mt-2 -mr-2 text-white rounded-full bg-danger">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                           className="stroke-1.5 w-4 h-4">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="relative flex items-center justify-center px-4 pb-4 mt-5 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className="stroke-1.5 w-4 h-4 mr-2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
              </svg>
              <span className="mr-1 text-primary text-sm"> Télécharger une photo </span> ou glisser-déposer
              <input name="image" onChange={handleImageChange} accept="image/*"
                     className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 flex-1 absolute top-0 left-0 w-full h-full opacity-0"
                     type="file"/></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 mt-12 md:flex-row">
        <Button color="primary" onClick={onPrevious} isActive={true}>
          Précédent
        </Button>
        <Button type="submit" color="primary">Enregistrer</Button>
      </div>
    </form>
  )
}

export {
  DetailsActivity,
  InformationActivity,
  ActivitySchedule,
  UploadImage
}
