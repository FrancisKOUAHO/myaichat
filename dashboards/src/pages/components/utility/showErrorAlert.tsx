import Swal from "sweetalert2";

const showErrorAlert = (errorMessage) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: errorMessage,
  });
};

export default showErrorAlert;
