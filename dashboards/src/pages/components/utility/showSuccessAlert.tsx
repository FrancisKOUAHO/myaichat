import Swal from "sweetalert2";
const showSuccessAlert = (successMessage) => {
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: successMessage,
  });
};

export default showSuccessAlert;
