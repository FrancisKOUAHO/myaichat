import Swal from "sweetalert2";

const showErrorAlert = (errorMessage: any) => {
	Swal.fire({
		icon: "error",
		title: "Oops...",
		text: errorMessage,
	});
};

export default showErrorAlert;
