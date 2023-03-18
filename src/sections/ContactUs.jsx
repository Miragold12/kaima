import React, { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik';
import Button from 'components/Button';
import * as Yup from 'yup';
import Navbar from 'components/Navbar';
import Image from 'next/image';

// import { contactSchema } from 'utils/validationSchema';

const contactSchema = {
	firstname: Yup.string(),
	email: Yup.string()
};

const ContactUs = () => {
	const [isSuccessfull, setIsSuccessfull] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const modalRef = useRef();

	const formik = useFormik({
		initialValues: {
			firstname: '',
			email: ''
		},
		validationSchema: Yup.object(contactSchema),

		onSubmit: async (values) => {
			try {
				console.log('i clicked');
				
				setIsLoading(true);
				setTimeout(() => {
						// setIsLoading(false);
						setIsSuccessfull(true);
					}, 2000);

				// setIsSuccessfull(true);

				// setIsLoading(false);
						setTimeout(() => {
						setIsLoading(false);
					}, 2000);

				return;
			} catch (error) {}
		}
	});
	const firstNameRef = useRef();
	const contactRef = useRef();

	//   Setting button text on form submission
	// const [buttonText, setButtonText] = useState('Send');

	// Sweet alert

	// function handleScrollToSection(id) {
	// 	// console.log(id);
	// 	const element = document.getElementById(id);
	// 	element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
	// }

	function handleCloseModal(e) {
		if (e.target === modalRef.current) {
			setIsSuccessfull(false);
		}
	}

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// console.log('--------------------------------', entry);
					// handleScrollToSection('about');

					firstNameRef.current?.focus();
				}
			}),
				{ threshold: 0.5 };
		});

		// console.log(IntersectionObserverEntry);
		observer.observe(contactRef.current);

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (isSuccessfull) {
			document.getElementsByTagName('body').style.overflowY = 'hidden';
		}
	}, []);

	return (
		<section id="contact" ref={contactRef} className="contact_us  h-auto relative md:mt-4 ">
			<div className="full contact_us-waiting px-4 md:py-0 py-20">
				<Navbar active />
				<div className="action_container  text-txt-white md:mt-[96px] text-center flex flex-col items-center">
					<>
						{isLoading ? (
							<div className="loader_container flex flex-col items-center">
								{/* image */}
								<Image
									src={'/icons/k_loader.svg'}
									alt="kaima logo"
									width={80}
									height={80}
									className="loader_icon"
								/>

								{/* text */}
								<h1 className="font-normal font-personal text-xs md:text-[18.75px]  mt-8 text-txt-white capitalize">
									We are working on it...
								</h1>
							</div>
						) : (
							<>
								<h3 className="text-sm text-txt-white-fade capitalize">
									get early access
								</h3>

								<h1 className=" font-personal text-[12px] w-[200px] md:text-[18.75px] leading-[26.89px] md:w-auto md:mx-auto md:leading-[44.83px] mt-[5px] md:mt-[8px] ">
									Be The First To Know When We Launch
								</h1>
								<form
									onSubmit={formik.handleSubmit}
									action=""
									className="form_box flex gap-6 flex-col md:flex-row  mt-[40px]  md:mt-[47px] justify-center items-center md:items-end"
								>
									<div className="form_group flex flex-col md:flex-row gap-6  ">
										<div className="input_component text-center w-full md:w-[200px] h-auto text-sm text-[#F5F5F5] ">
											<label
												htmlFor=""
												className="font-eb text-xs leading-[15.66px] "
											>
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
											<label
												htmlFor=""
												className="font-eb text-xs leading-[15.66px]"
											>
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
											// click={() => setIsLoading(true)}
											type="submit"
											style={{
												color: '#ffffff',
												padding: '7px 30px',
												fontSize: '12px'
											}}
										/>
									</div>
								</form>
							</>
						)}
						{/* FORM */}
					</>
				</div>
			</div>

			{isSuccessfull && (
				<div
					ref={modalRef}
					onClick={(e) => handleCloseModal(e)}
					className=" fixed top-0 left-0 w-full h-full bg-[#000000b9] centered z-30"
				>
					<div className="alert w-[90%] md:w-[80%] bg-txt-white h-auto md:p-[60px] p-[40px] centered fadeIn">
						<div className="loader_container flex flex-col items-center  text-center">
							{/* image */}
							<Image
								src={'/icons/k_checked.svg'}
								alt="kaima logo"
								width={80}
								height={80}
								className="scaleOut"
							/>

							{/* text */}
							<h1 className="font-normal font-personal text-xs md:text-[18.75px]  leading-[44.83px] mt-8 text-txt capitalize">
								You’ve Been Added To The Waitlist
							</h1>

							<h1 className="font-normal font-eb text-xs md:text-[18.75px]  leading-[30.83px] mt-[36px] text-[#110200B2] md:w-[380px] ">
								Thank you for choosing to take your fashion lifestyle to a whole other
								level
							</h1>

							<h1 className="font-normal font-eb text-xs md:text-[18.75px] leading-[30.83px] mt-[12px] text-[#110200B2] md:w-[380px]">
								Sit back and relax, we will hit you up once we are live!
							</h1>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default ContactUs;
