import * as yup from "yup";

const ValidationSchemaLogin = yup.object().shape({
	email: yup.string().email("invalid email formik").required("Please enter your email correctly"),
	password: yup
		.string()
		.required("Please enter your email password")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"At least 8 worlds, one capital letter, one number and noe character",
		),
});

export default ValidationSchemaLogin;
