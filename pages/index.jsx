import LandingPageLayout from 'layout/LandingPageLayout';
import Hero from 'sections/hero';
import CustomSection from 'sections/CustomSection';
import React, { useState, useEffect } from 'react';
import AboutUs from 'sections/AboutUs';
import ContactUs from 'sections/ContactUs';
import Loader from 'components/Loader';
import { motion } from 'framer-motion';
import { sectionData2 } from 'utils/sectionData';

const Home = () => {
	// const [showLoader, setShowLoader] = useState()
	function handleScrollToSection(id) {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
	}
	function removeLoader() {
		let element = document.getElementById('loader');

		element.style.display = 'none';
	}

	function revealSite() {
		let element = document.getElementById('site');
		element.style.display = 'block';
	}

	useEffect(() => {
		setTimeout(() => {
			revealSite();
		}, 6000);

		setTimeout(() => {
			handleScrollToSection('home');
		}, 7000);

		setTimeout(() => {
			// removeLoader();
		}, 8500);
	}, []);

	// return;
	return (
		<motion.div className="landing-page w-full h-full">
			<Loader />

			<div id="site" className="site-wrapper hidden">
				<Hero />
				<AboutUs />
				<div className="bg-[#F5F5F5] space-y-[58px] pb-[40px] md:pb-[0] md:space-y-0  custom_space">
					{sectionData2.map((i, k) => (
						<div className="" key={k}>
							<CustomSection sectionId={i.id} typeTwo={i.typeTwo} d={i} />
						</div>
					))}
				</div>
				<ContactUs />
			</div>
		</motion.div>
	);
};

Home.getLayout = function (page) {
	return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Home;
