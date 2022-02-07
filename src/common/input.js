import React from "react";

const Input = ({ name, lable, type, formik }) => {
	return (
		<div className="my-4 w-[90%]">
			<label htmlFor={name} className="font-bold flex flex-row justify-between">
				<p className="text-gray-700">{lable}</p>
				<p className="text-xs">
					{formik.errors[name] && formik.touched[name] && (
						<div className="text-red-400">{formik.errors[name]}</div>
					)}
				</p>
			</label>
			<input
				type={type}
				className="px-1 w-full h-10 border-2 border-gray-200 rounded-md font-bold text-gray-700 tracking-wide"
				name={name}
				onChange={formik.handleChange}
				{...formik.getFieldProps(name)}
			/>
		</div>
	);
};

export default Input;
