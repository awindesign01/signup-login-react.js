import Input from "./input";

const inputOption = [
	{ lable: "Name", name: "name", type: "text" },
	{ lable: "Email", name: "email", type: "text" },
	{ lable: "Password", name: "password", type: "password" },
	{ lable: "Password Confirmation", name: "passwordconfirmation", type: "text" },
];

const TextFieldeSignup = ({ formik }) => {
	return (
		<>
			{inputOption.map(({ lable, name, type }) => {
				return <Input key={name} lable={lable} name={name} type={type} formik={formik} />;
			})}
		</>
	);
};

export default TextFieldeSignup;
