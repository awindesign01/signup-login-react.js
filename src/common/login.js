import React from "react";
import TextFieldeLogin from "./textFieldLogin";
import axios from "axios";
import { useFormik } from "formik";
import ValidationSchemaLogin from "./validationSchemaLogin";

const Login = () => {
	const [FormValue, setFormValue] = React.useState({
		email: "",
		password: "",
	});

	const formik = useFormik({
		initialValues: FormValue,
		onSubmit: (values) => {
			axios
				.get("http://localhost:8000/users")
				.then((res) => {
					if (res.data.find((i) => i.email === values.email)) {
						return alert("welcome");
					} else {
						return alert("user not find");
						// todo comment: going to sign up
					}
				})
				.catch((err) => console.log("error", err));
		},
		validationSchema: ValidationSchemaLogin,
		validateOnMount: true,
		enableReinitialize: true,
	});
	return (
		<div className="w-[90%] h-[75%]">
			<div className="w-full h-[10%] flex justify-start items-center text-gray-800 text-xl font-extrabold">
				<h1>Awin Desgin</h1>
			</div>
			<div className="w-full h-auto">
				<p className="text-sm text-gray-600 font-bold">Log In</p>
				<h1 className="text-gray-800 text-3xl font-bold">
					Hi, <span className="text-[#267f92]">Good Day</span>
				</h1>
				<p className="text-xs text-gray-400 font-bold tracking-wider">Press log in to continue</p>
			</div>
			<div className="w-full h-auto flex flex-col justify-center">
				<form onSubmit={formik.handleSubmit}>
					<TextFieldeLogin formik={formik} />
					<div className="w-[90%] h-[10%] flex justify-between items-center">
						<button
							className="mb-2 rounded-full w-2/5 h-12 bg-[#267f92] disabled:bg-opacity-50 text-white font-bold tracking-wide"
							type="submit"
							disabled={!formik.dirty}
						>
							Log In
						</button>
					</div>
					<p
						className="rounded-full w-auto h-auto bg-white text-sm text-[#267f92] font-bold tracking-wide"
						// onClick={() => setIsShow(!isShow)}
						type="none"
					>
						I'am not account. <a href="#">Create Account</a>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
