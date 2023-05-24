import Swal from "sweetalert2";
const showSuccessAlert = (successMessage: any) => {
    Swal.fire({
        icon: "success",
        title: "Success!",
        text: successMessage,
    });
};

export default showSuccessAlert;
