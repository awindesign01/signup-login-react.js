import React from "react";
import TextFieldeSignup from "./textFieldSignup";
import axios from "axios";
import ValidationSchemaSingup from "./validationSchemaSingup";
import { useFormik } from "formik";

const Signup = () => {
	const [FormValue, setFormValue] = React.useState({
		name: "",
		email: "",
		password: "",
		passwordconfirmation: "",
	});

	const formik = useFormik({
		initialValues: FormValue,
		onSubmit: (values) => {
			axios
				.get("http://localhost:8000/users")
				.then((res) => {
					let saveEmailUser = [];
					res.data.map((i) => saveEmailUser.push(i.email));
					const findEmailUser = saveEmailUser.find((i) => i);
					if (findEmailUser === values.email) {
						return alert("user is with this email \n please use other email or login");
					} else {
						// todo comment: post user
						axios.post("http://localhost:8000/users", values);
						// todo comment: empty forms
						setFormValue("");
						// todo comment: redirect to dashboad screen
						window.location.href = "http://localhost:3000/log-in";
					}
				})
				.catch((err) => console.log("error", err));
		},
		validationSchema: ValidationSchemaSingup,
		validateOnMount: true,
		enableReinitialize: true,
	});
	return (
		<div className="w-[90%] h-[95%]">
			<div className="w-full h-[10%] flex justify-start items-center text-gray-800 text-xl font-extrabold">
				<h1>Awin Desgin</h1>
			</div>
			<div className="w-full h-auto">
				<p className="text-sm text-gray-600 font-bold">Sign Up</p>
				<h1 className="text-gray-800 text-3xl font-bold">
					Hi, <span className="text-[#267f92]">Your Welcome</span>
				</h1>
				<p className="text-xs text-gray-400 font-bold tracking-wider">Press sing up to continue</p>
			</div>
			<div className="w-full h-3/5">
				<form onSubmit={formik.handleSubmit}>
					<TextFieldeSignup formik={formik} />
					<div className="w-[90%] h-[10%] flex justify-between items-center">
						<button
							className="rounded-full w-2/5 h-12 bg-[#267f92] disabled:bg-opacity-50 text-white font-bold tracking-wide"
							type="submit"
							disabled={!formik.dirty}
						>
							Sign Up
						</button>
						<p
							className="rounded-full w-auto h-auto bg-white text-sm text-[#267f92] font-bold tracking-wide"
							// onClick={() => setIsShow(!isShow)}
							type="none"
						>
							I'am have account. <a href="/log-in">Log in</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
