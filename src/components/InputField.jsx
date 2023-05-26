import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

// listen to browser scroll

const InputFied = ({ type, click, icon, disabled, label, change, value, blur, error, touched, ...rest }) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [passwordMode, setPasswordMode] = useState('password');
	const [errorMsg, setErrorMsg] = useState('');
	const [filedValue, setFieldValue] = useState('');
	const inputRef = useRef(null);

	function onChangeHandler(e) {
		e.preventDefault();
		const {
			target: { value }
		} = e;

		setFieldValue(value);
	}

	function togglePasswordMode() {

		if (passwordMode === 'text') {
			setPasswordMode('password');
		} else {
			setPasswordMode('text');
		}
	}

	function typeHandler(type) {

		if (type === 'password') {
			return passwordMode;
		} else {
			return type;
		}
	}

	// useEffect(() => {
	// 	if (error) setErrorMsg(error);
	// 	if (error === undefined) setErrorMsg('');

	// 	return () => {
	// 		return;
	// 	};
	// });

	if (type == 'textarea') {
		return (
			<div className="">
				<div disabled={disabled} onClick={click} className={`custom-input ${!true && 'full'} `}>
					<textarea
						ref={inputRef}
						type={typeHandler(type)}
						value={value || filedValue}
						onChange={change || onChangeHandler}
						onBlur={blur}
						className={`textarea ${filedValue.length > 0 || (value?.length > 0 && 'active')} ${
							touched && error && 'error'
						}`}
						{...rest}
					/>

					<label className="absolute body-sm text-txt-subdued-alt" htmlFor={'name'}>
						{label}
					</label>
				</div>

				{touched && error && (
					<div className="error text-txt-critical middle mt-2">
						<Image width={20} height={20} src={'/icons/error.svg'} alt="" />
						<h1 className="error-text ml-2">
							{error || `Please enter your ${label.toLowerCase()}`}
						</h1>
					</div>
				)}
			</div>
		);
	}

	return (
		<div className="">
			<div disabled={disabled} onClick={click} className={`custom-input ${!true && 'full'} `}>
				{type == 'email' ? (
					<div className="icon absolute right-3">
						<Image width={20} height={20} src={'/icons/user-email.svg'} alt="" />
					</div>
				) : (
					type == 'password' && (
						<div
							role={'button'}
							onClick={() => togglePasswordMode()}
							className="icon absolute right-3"
						>
							{passwordMode === 'password' ? (
								<Image width={20} height={20} src={'/icons/eye-close.svg'} alt="" />
							) : (
								<Image width={20} height={20} src={'/icons/eye-open.svg'} alt="" />
							)}
						</div>
					)
				)}
				<input
					ref={inputRef}
					type={typeHandler(type)}
					value={value || filedValue}
					onChange={change || onChangeHandler}
					onBlur={blur}
					className={`${filedValue.length > 0 || (value?.length > 0 && 'active')} ${
						touched && error && 'error'
					}`}
					{...rest}
				/>

				<label className="absolute body-sm text-txt-subdued-alt" htmlFor={'name'}>
					{label}
				</label>
			</div>

			{touched && error && (
				<div className="error text-txt-critical middle mt-2">
					<Image width={20} height={20} src={'/icons/error.svg'} alt="" />
					<h1 className="error-text ml-2">{error || `Please enter your ${label.toLowerCase()}`}</h1>
				</div>
			)}
		</div>
	);
};

export default InputFied;
