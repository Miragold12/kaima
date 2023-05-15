import Image from 'next/image';
import Navbar from 'components/Navbar';
import LandingPageLayout from 'layout/LandingPageLayout';
import Hero from 'sections/hero';
import CustomSection from 'sections/CustomSection';
import Services from 'sections/Services';

import React, { useState, useEffect } from 'react';
import AboutUs from 'sections/AboutUs';
import Faq from 'sections/Faq';
import ContactUs from 'sections/ContactUs';
import Loader from 'components/Loader';
import { AnimatePresence, motion } from 'framer-motion';

const Home = () => {
	const [showLoader, setShowLoader] = useState(true);

	// function authModalHandler() {
	// 	setShowAuthModal((p) => !p);
	// }

	function scrollToHome(val) {
		if (typeof window !== undefined && val) {
			let bodyEle = document.getElementsByTagName('body')[0];
			bodyEle.style.overflowY = 'hidden';
		}
	}

	function handleScrollToSection(id) {
		// console.log(id);
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
	}

	function removeLoader() {
		// console.log(id);
		let element = document.getElementById('loader');

		element.style.display = 'none';
	}

	// USEFEECTS ---------------------------

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setShowLoader(false);
	// 	}, 8000);

	// 	setTimeout(() => {
	// 		handleScrollToSection('home');
	// 		// removeLoader();
	// 	}, 9000);

	// 	setTimeout(() => {
	// 		// handleScrollToSection('home');
	// 		removeLoader();
	// 	}, 10000);
	// }, []);

	// useEffect(() => {
	// 	const observer = new IntersectionObserver((entries) => {
	// 		entries.forEach((entry) => {
	// 			if (entry.isIntersecting) {
	// 				console.log('--------------------------------', entry);
	// 				handleScrollToSection('home');
	// 			}
	// 		}),
	// 			{ threshold: 0.5 };
	// 	});

	// 	// console.log(IntersectionObserverEntry);
	// 	// observer.observe(sectionRef.current);

	// 	return () => observer.disconnect();
	// });

	// USEFEECTS ---------------------------

	const sectionData = [
		{
			typeTwo: false,
			fadeText: 'Kaima aims to dress you up as your best self. ',
			mainText: 'Expert Styling Advice',
			subText: 'Always know what to wear',
			img: '/images/k_custom_img_one.webp',
			id: 'expert'
		},
		{
			typeTwo: true,
			fadeText: 'The focus here is personalizing your style to your goals and needs so that every single outfit represents your best self. ',
			mainText: 'Access The Best Outfits Easily',
			subText: 'Always have what to wear',
			img: '/images/k_custom_img_two.webp',
			id: 'access'
		},
		{
			typeTwo: false,
			fadeText: 'Styling is a language but because it can be complex, it is sometimes not a very easy one to speak, ',
			mainText: 'Show Up As Your Best Self',
			subText: 'With looks that fit your personal needs',
			img: '/images/k_custom_img_three.webp',
			id: 'showUp'
		},
		{
			typeTwo: true,
			fadeText: 'we stand in as translators;, a bridge between you and true satisfaction in your styling experience',
			mainText: 'Timeless Fashion',
			subText: 'Curate a wardrobe you’re always proud of.',
			img: '/images/k_custom_img_four.webp',
			id: 'find'
		}
	];

	// return;
	return (
		<motion.div className="landing-page w-full h-full">
			<Loader />

			<Hero />
			<AboutUs />
			{/* <CustomSection sectionId={'expert'} /> */}
			{/* <Services /> */}

			<div className="bg-[#F5F5F5] space-y-[58px] pb-[40px] md:pb-[0] md:space-y-0  custom_space">
				{sectionData.map((i, k) => (
					<div className="" key={k}>
						<CustomSection sectionId={i.id} typeTwo={i.typeTwo} d={i} />
					</div>
				))}
			</div>

			{/* <Faq /> */}
			<ContactUs />
		</motion.div>
	);
};

Home.getLayout = function (page) {
	return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Home;
