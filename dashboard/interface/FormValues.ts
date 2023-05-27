interface FormValues {
    address: string,
    cancellation_conditions: string,
    category_id: string,
    city: string,
    description: string,
    duration: string,
    name: string,
    image: File | null,
    practical_information: string,
    price: string,
    compagny: string,
    programme: string,
    schedule: Object,
    organisator_id: string
}

export default FormValues;
