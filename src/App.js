// todo comment: style is only width: 1536px,height: 760px;
import React from "react";
import "./App.css";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { IoFingerPrint } from "react-icons/io5";
import { useFormik } from "formik";

function App() {
	let [isShow, setIsShow] = useState(false);
	const AD = "<Awin Desing />";

	// const formik = useFormik({initialValues:{}});

	return (
		<section className="App w-screen h-screen grid place-items-center">
			<main className="xl:w-[1170px]">
				<div className="mx-auto border-4 border-solid border-[#267f92] rounded-2xl bg-white shadow-lg w-[90%] h-[75vh] flex">
					{isShow === false ? (
						<div className="fixed rounded-lg moveLeft bg-[#267f92] w-[526px] h-[74vh] grid place-items-center z-50">
							<div className="h-2/5 flex flex-col justify-around items-center">
								<IoFingerPrint className="text-5xl text-white animate-pulse" />
								<p className="text-4xl font-bold text-white text-opacity-90">{AD}</p>
								<p className="text-lg font-bold text-white text-opacity-50 tracking-wider">
									Making people happy is our dream
								</p>
							</div>
						</div>
					) : (
						<div className="fixed moveRight rounded-lg bg-[#267f92] w-[526px] h-[74vh] grid place-items-center z-50">
							<div className="h-2/5 flex flex-col justify-around items-center">
								<IoFingerPrint className="text-5xl text-white animate-pulse" />
								<p className="text-4xl font-bold text-white text-opacity-90">{AD}</p>
								<p className="text-lg font-bold text-white text-opacity-50 tracking-wider">
									Making people happy is our dream
								</p>
							</div>
						</div>
					)}
					<div className="w-1/2 h-full grid place-items-center">
						<div className="w-[90%] h-[95%]">
							<div className="w-full h-[10%] flex justify-start items-center text-gray-800 text-xl font-extrabold">
								<h1>Awin Desgin</h1>
							</div>
							<div className="w-full h-auto">
								<p className="text-sm text-gray-600 font-bold">Sign Up</p>
								<h1 className="text-gray-800 text-3xl font-bold">
									Hi, <span className="text-[#267f92]">Your Welcome</span>
								</h1>
								<p className="text-xs text-gray-400 font-bold tracking-wider">
									Press sing up to continue
								</p>
							</div>
							<div className="w-full h-3/5">
								<FormControl className="w-[90%]">
									<TextField fullWidth label="Name" margin="normal" id="fullWidth" />
									<TextField fullWidth label="Email" margin="normal" id="fullWidth" />
									<TextField fullWidth label="Password" margin="normal" id="fullWidth" />
									<TextField fullWidth label="Password Configore" margin="normal" id="fullWidth" />
								</FormControl>
							</div>
							<div className="w-[90%] h-[10%] flex justify-between items-center">
								<Button variant="contained" className="w-2/5 h-12 bg-[#267f92]">
									Sign Up
								</Button>
								<Button
									variant="outlined"
									className="w-2/5 h-12 font-bold"
									onClick={() => setIsShow(!isShow)}
								>
									I Have Account
								</Button>
							</div>
						</div>
					</div>
					<div className="w-1/2 h-full grid place-items-center">
						<div className="w-[90%] h-[75%]">
							<div className="w-full h-[10%] flex justify-start items-center text-gray-800 text-xl font-extrabold">
								<h1>Awin Desgin</h1>
							</div>
							<div className="w-full h-auto">
								<p className="text-sm text-gray-600 font-bold">Log In</p>
								<h1 className="text-gray-800 text-3xl font-bold">
									Hi, <span className="text-[#267f92]">Good Day</span>
								</h1>
								<p className="text-xs text-gray-400 font-bold tracking-wider">
									Press log in to continue
								</p>
							</div>
							<div className="w-full h-2/5 flex flex-col justify-center">
								<FormControl className="w-[90%]">
									<TextField fullWidth label="Email" margin="normal" id="fullWidth" />
									<TextField fullWidth label="Password" margin="normal" id="fullWidth" />
								</FormControl>
							</div>
							<div className="w-[90%] h-[10%] flex justify-between items-center">
								<Button variant="contained" className="w-2/5 h-12 bg-[#267f92]">
									Log In
								</Button>
								<Button
									variant="outlined"
									className="w-2/5 h-12 font-bold"
									onClick={() => setIsShow(!isShow)}
								>
									Create Account
								</Button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}

export default App;
// todo comment: style is only width: 1536px,height: 760px;
