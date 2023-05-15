import Image from 'next/image';
import Navbar from 'components/Navbar';
import LandingPageLayout from 'layout/LandingPageLayout';
import Hero from 'sections/hero';
import CustomSection from 'sections/CustomSection';
import Services from 'sections/Services';
import { sectionData } from 'utils/sectionData';
import React, { useState, useEffect } from 'react';
import AboutUs from 'sections/AboutUs';
import Faq from 'sections/Faq';
import ContactUs from 'sections/ContactUs';
import { disableBodyScroll } from 'utils';
import Loader from 'components/Loader';
const Brand = () => {
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

	useEffect(() => {
		setTimeout(() => {
			setShowLoader(false);
		}, 8000);

		setTimeout(() => {
			handleScrollToSection('home');
			// removeLoader();
		}, 9000);

		setTimeout(() => {
			// handleScrollToSection('home');
			removeLoader();
		}, 10000);
	}, []);
	return (
		<div className="landing-page w-full h-full">
			<Loader brand />
			<Hero mode={'brand'} />
			<AboutUs mode={'brand'} />
			{/* 
			{sectionData.map((i, k) => (
				<div className="" key={k}>
					<CustomSection sectionId={i.id} typeTwo={i.typeTwo} d={i} />
				</div>
			))} */}

			<div className="bg-[#F5F5F5] space-y-[58px] pb-[40px] md:pb-[0] md:space-y-0  custom_space">
				{sectionData.map((i, k) => (
					<div className="" key={k}>
						<CustomSection sectionId={i.id} typeTwo={i.typeTwo} d={i} />
					</div>
				))}
			</div>

			<ContactUs />
		</div>
	);
};

Brand.getLayout = function (page) {
	return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Brand;
