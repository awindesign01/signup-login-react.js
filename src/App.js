// todo comment: style is only width: 1536px,height: 760px;
import React from "react";
import "./App.css";
import { useState } from "react";
import { IoFingerPrint } from "react-icons/io5";
import Signup from "./common/signup";
import Login from "./common/login";

function App() {
	let [isShow, setIsShow] = useState(false);

	const AD = "<Awin Desing />";
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
						<Signup />
					</div>
					<div className="w-1/2 h-full grid place-items-center">
						<Login />
					</div>
				</div>
			</main>
		</section>
	);
}

export default App;
// todo comment: style is only width: 1536px,height: 760px;
