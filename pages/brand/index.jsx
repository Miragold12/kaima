import LandingPageLayout from 'layout/LandingPageLayout';
import Hero from 'sections/hero';
import CustomSection from 'sections/CustomSection';
import { sectionData } from 'utils/sectionData';
import React, { useState, useEffect } from 'react';
import AboutUs from 'sections/AboutUs';
import ContactUs from 'sections/ContactUs';
import Loader from 'components/Loader';
import { handleScrollToSection } from 'utils';

const Brand = () => {
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
		}, 3000)

		setTimeout(() => {
			handleScrollToSection('home');
		}, 3500);

		setTimeout(() => {
			removeLoader();
		}, 4500);
	}, []);

	return (
		<div className="landing-page w-full h-full">
			<Loader brand />

			<div id='site' className="site-wrapper hidden">
				<Hero mode={'brand'} />
				<AboutUs mode={'brand'} />
				<div className="bg-[#F5F5F5] space-y-[58px] pb-[40px] md:pb-[0] md:space-y-0  custom_space">
					{sectionData.map((i, k) => (
						<div className="" key={k}>
							<CustomSection sectionId={i.id} typeTwo={i.typeTwo} d={i} />
						</div>
					))}
				</div>
				<ContactUs />
			</div>
		</div>
	);
};

Brand.getLayout = function (page) {
	return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Brand;
