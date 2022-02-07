import * as yup from "yup";

const ValidationSchemaSingup = yup.object().shape({
	name: yup
		.string()
		.required("Please enter your name correctly")
		.min(2, "The length of the name must be at least 2 characters"),
	email: yup.string().email("invalid email formik").required("Please enter your email correctly"),
	password: yup
		.string()
		.required("Please enter your email password")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"At least 8 worlds, one capital letter, one number and noe character",
		),
	passwordconfirmation: yup
		.string()
		.required("Enter your password again")
		.oneOf([yup.ref("password"), null], "The password does not match"),
});

export default ValidationSchemaSingup;
