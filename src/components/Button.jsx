import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// const navArray = ['HOME', 'ABOUT US', 'HOW IT WORKS', 'CONTACT US', 'FAQs'];
const navArray = [
	{
		name: 'HOME',
		link: '#home'
	},

	{
		name: 'ABOUT US',
		link: '#about'
	},

	{
		name: 'HOW IT WORKS',
		link: '#how'
	},

	{
		name: 'CONTACT US',
		link: '#contact'
	},

	{
		name: 'FAQs',
		link: '#faq'
	}
];

// listen to browser scroll

const Button = ({ isLoading, roboto, text, click, icon, type, variant, disabled, full, ...rest }) => {

	// console.log('the current scroll positio is', scrollPosition);



	if (type == 'ghost2') {
		return (
			<button
				disabled={disabled || isLoading}
				onClick={click}
				{...rest}
				className={`btn ${full && 'full'} ghost2`}
			>
				{isLoading && (
					<div className="loader-body">
						<div className="loader-body-roller"></div>
					</div>
				)}

				{icon && (
					<div className="icon">
						<Image width={19.5} height={16.5} src={icon} alt="" />
					</div>
				)}

				{/* <div className="w-2"></div> */}

				{!isLoading && <p className={`text-[14px] font-medium`}>{text}</p>}
			</button>
		);
	}

	return (
		<button
			disabled={disabled || isLoading}
			onClick={click}
			{...rest}
			type={type}
			className={`btn ${full && 'full'}  ${variant === 'secondary' ? 'sec' : 'primary'}`}
		>
			{isLoading && (
				<div className="loader-body">
					<div className="loader-body-roller"></div>
				</div>
			)}

			{icon && (
				<div className="icon">
					<Image width={19.5} height={16.5} src={icon} alt="" />
				</div>
			)}

			{/* <div className="w-2"></div> */}

			{!isLoading && <p className={`text-[14px] font-medium  ${roboto && "font-roboto"}`}>{text}</p>}
		</button>
	);
};

export default Button;
