import React, { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik';
import Button from 'components/Button';
import * as Yup from 'yup';
import Navbar from 'components/Navbar';
// import { contactSchema } from 'utils/validationSchema';

const contactSchema = {
	fullName: Yup.string().required('*Required'),
	email: Yup.string().email('Must be a valid email').required('Email is required'),
	category: Yup.string().required('*Required'),
	phoneNumber: Yup.string().max(11, 'Must contain 11 numbers').required('*Required'),
	message: Yup.string().required('*Required')
};

const ContactUs = () => {
	const formik = useFormik({
		initialValues: {
			firstname: '',
			email: ''
		},
		validationSchema: Yup.object(contactSchema),

		onSubmit: async (values) => {
			try {
				return;
			} catch (error) {
				Failure();
				setButtonText('Send');
			}
		}
	});
	const firstNameRef = useRef();
	const contactRef = useRef();

	//   Setting button text on form submission
	const [buttonText, setButtonText] = useState('Send');

	// Sweet alert

	function handleScrollToSection(id) {
		// console.log(id);
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
	}

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// console.log('--------------------------------', entry);
					// handleScrollToSection('about');

					firstNameRef.current.focus();
				}
			}),
				{ threshold: 0.5 };
		});

		// console.log(IntersectionObserverEntry);
		observer.observe(contactRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<section id="contact" ref={contactRef} className="contact_us  h-auto relative md:mt-4 ">

			<div className="full contact_us-waiting px-4 md:py-0 py-20">
				<Navbar active />
				<div className="action_container  text-txt-white md:mt-[96px] text-center flex flex-col items-center">
					<h3 className="text-sm text-txt-white-fade capitalize">get early access</h3>

					<h1 className=" font-personal text-[12px] w-[200px] md:text-[18.75px] leading-[26.89px] md:w-auto md:mx-auto md:leading-[44.83px] mt-[5px] md:mt-[8px] ">
						Be The First To Know When We Launch
					</h1>

					<> 
						{/* FORM */}
						<form
							onSubmit={formik.handleSubmit}
							action=""
							className="form_box flex gap-6 flex-col md:flex-row  mt-[40px]  md:mt-[47px] justify-center items-center md:items-end"
						>
							<div className="form_group flex flex-col md:flex-row gap-6 ">
								<div className="input_component text-center w-full md:w-[200px] h-auto text-sm text-[#F5F5F5] ">
									<label htmlFor="" className="font-eb text-xs leading-[15.66px] ">
										First Name
									</label>
									<input
										ref={firstNameRef}
										type="text"
										name="firstname"
										id="firstname"
										onChange={formik.handleChange}
										onBlur={formik.handleChange}
										value={formik.values.firstname}
										// placeholder="firstname"
										className="bg-[#F5F5F533] mt-[4px] rounded w-full px-3 p-[7px]  text-xs leading-[15.66px]    text-center"
									/>
								</div>
								{/*  */}
								<div className="input_component text-center w-full md:w-[200px] h-auto text-sm text-[#F5F5F5]">
									<label htmlFor="" className="font-eb text-xs leading-[15.66px]">
										Email Address
									</label>
									<input
										type="text"
										name="email"
										onChange={formik.handleChange}
										placeholder="***@gmail.com"
										value={formik.values.email}
										// value={''}
										id="email"
										className="bg-[#F5F5F533] mt-[4px] rounded w-full px-3 p-[7px] text-xs leading-[15.66px]    text-center"
									/>
								</div>
							</div>
							{/*  */}
							{/* import Button from 'components/Button'; */}
							<div className="pb-[2px] relative">
								<Button
									text={'subscribe'}
									style={{
										color: '#ffffff',
										padding: '7px 30px',
										fontSize: '12px'
									}}
								/>
							</div>
						</form>
					</>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
