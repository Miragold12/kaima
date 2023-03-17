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

	// function disableBodyScroll(val) {
	// 	if (typeof window !== undefined && val) {
	// 		let bodyEle = document.getElementsByTagName('body')[0];
	// 		bodyEle.style.overflowY = 'hidden';
	// 	}
	// }

	useEffect(() => {
		setTimeout(() => {
			setShowLoader(false);
		}, 5000);
	}, []);

	const sectionData = [
		{
			typeTwo: false,
			fadeText: 'Kaima aims to dress you up as your best self. ',
			mainText: 'Expert Styling Advice',
			subText: 'Always know what to wear',
			img: '/images/k_custom_img_one.png',
			id: 'expert'
		},
		{
			typeTwo: true,
			fadeText: 'The focus here is personalizing your style to your goals and needs so that every single outfit represents your best self. ',
			mainText: 'Access The Best Outfits Easily',
			subText: 'Always have what to wear',
			img: '/images/k_custom_img_two.png',
			id: 'access'
		},
		{
			typeTwo: false,
			fadeText: 'Styling is a language but because it can be complex, it is sometimes not a very easy one to speak, ',
			mainText: 'Show Up As Your Best Self',
			subText: 'With looks that fit your personal needs',
			img: '/images/k_custom_img_three.png',
			id: 'showUp'
		},
		{
			typeTwo: true,
			fadeText: 'we stand in as translators;, a bridge between you and true satisfaction in your styling experience',
			mainText: 'Timeless Fashion',
			subText: 'Curate a wardrobe you’re always proud of.',
			img: '/images/k_custom_img_four.png',
			id: 'find'
		}
	];

	// return;
	return (
		<AnimatePresence>
			{!showLoader ? (
				<motion.div
					initial={{
						opacity: 7,
						y: 100
					}}
					animate={{
						opacity: 1,
						y: 0
					}}
					key={1}
					className="landing-page w-full h-full"
				>
					<Hero />
					<AboutUs />
					{/* <CustomSection sectionId={'expert'} /> */}
					{/* <Services /> */}
					{sectionData.map((i, k) => (
						<div className="" key={k}>
							<CustomSection sectionId={i.id} typeTwo={i.typeTwo} d={i} />
						</div>
					))}

					{/* <Faq /> */}
					<ContactUs />
				</motion.div>
			) : (
				<motion.div
					exit={{
						y: -100,
						opacity: 0,
						transition: {
							// delay: 6,
							duration: 1,
							ease: 'easeOut'
						}
					}}
					key={0}
				>
					<Loader />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

Home.getLayout = function (page) {
	return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Home;
