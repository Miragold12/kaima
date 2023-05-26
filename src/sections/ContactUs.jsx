import React, { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik';
import Button from 'components/Button';
import * as Yup from 'yup';
import Navbar from 'components/Navbar';
import Image from 'next/image';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Form from './Form';

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
				<div className="action_container   text-txt-white md:mt-[53px] text-center flex flex-col items-center">
					<MailchimpSubscribe
						url={
							'https://fashion.us21.list-manage.com/subscribe/post?u=cf1cc823ae3e04a9a856eead5&id=ae785d9288'
						}
						render={({ subscribe, status, message }) => (
							<Form
								onValidated={subscribe}
								status={status}
								message={message}
								setIsSuccessfull={setIsSuccessfull}
								setIsLoading={setIsLoading}
							/>
						)}
					/>
				</div>
			</div>

			{isSuccessfull && (
				<div
					ref={modalRef}
					onClick={(e) => handleCloseModal(e)}
					className=" fixed top-0 left-0 w-full h-full bg-[#000000b9] centered z-30"
				>
					<div className="alert w-[90%] md:w-[80%]  relative bg-txt-white h-auto md:p-[60px] p-[40px] centered fadeIn">
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

							<h1 className="font-normal font-eb text-xs md:text-[18.75px]  leading-[30.83px]  mt-[20px] md:mt-[36px] text-[#110200B2]  w-[210px]  md:w-[380px] ">
								Thank you for choosing to take your fashion lifestyle to a whole other
								level
							</h1>

							<h1 className="font-normal font-eb text-xs md:text-[18.75px] leading-[30.83px] mt-[8px] md:mt-[12px] text-[#110200B2] w-[210px]   md:w-[380px]">
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
