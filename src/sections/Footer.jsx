import Image from 'next/image';
import React from 'react';

const navOne = [
	{
		name: 'Home',
		link: 'home'
	},

	{
		name: 'Contact',
		link: 'contact'
	},

	{
		name: 'FAQ',
		link: 'about'
	},

	{
		name: 'Shop',
		link: 'how'
	}
];

const navTwo = [
	{
		name: 'About us',
		link: '#home'
	},

	{
		name: 'Privacy Policy',
		link: '#about'
	},

	{
		name: 'Terms And Conditions',
		link: '#how'
	},

	{
		name: 'Help',
		link: '#how'
	}
];

const navThree = [
	{
		name: 'Telegram',
		link: '#home'
	},

	{
		name: 'Twitter',
		link: '#about'
	},

	{
		name: 'Instagram',
		link: '#how'
	},

	{
		name: 'Call Us on +234709990432',
		link: '#how'
	}
];

const logoArray = ['/icons/k_pay.svg', '/icons/k_uber.svg', '/icons/k_microsoft.svg'];

const Footer = () => {
	function handleScrollToSection(id) {
		// console.log(id);
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
	}

	return (
		<footer className=" w-full linear_bg md:px-[120px]   relative py-6 md:py-0">
			{/* row one */}
			<div className=" flex flex-col space-y-3 md:space-y-0  	 h-1/2  gap-5 md:gap-0 md:flex-row justify-center md:justify-between items-start md:items-center ">
				<div className="text_box text-txt-white space-y-3 ml-4 md:ml-0">
					<h1 className=" font-personal font-normal md:text-[18.75px] text-[#F5F5F5] leading-[32.69px] md:leading-[44.83px] md:w-[461px]">
					Let Us Walk You Through Some Of Our Amazing Features
					</h1>

					<h3 className="text-medium w-[211px] md:w-[403px]  md:text-[18.75px] text-[12px]  md:leading-[30px] leading-[20px] text-[#F5F5F5B2] font-eb">
					Explore our many interesting features so you know how much we have in store for you!
					</h3>
				</div>

				<div className="space_x hidden md:flex w-[100px]"></div>

				{/* IMAGE -destop screen*/}
				<div className="col_two hidden md:block  relative w-[616px]   h-[200px]">
					<Image src={'/images/k_brandfunc.png'} alt={'hero'} fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
				</div>

				{/* IMAGE -mobile screen*/}
				<div className="col_two md:hidden pl-4">
					<Image src={'/images/k_footer_slider.webp'} alt={'hero'} width={706} height={200} />
				</div>
			</div>

			{/* row two-- */}
			<div className="mt-11 md:mt-0 	  md:row footer_row px-4 md:px-0 flex flex-col md:flex-row text-[#f5f5f5] font-eb font-normal  h-1/2  gap-6 md:justify items-start md:items-center relative ">
			

				{/* ---------------- */}
				<div className="logo_box space-y-4  md:-mt-[10px]">
					<Image src="/icons/k_logo_sec.svg" alt="kaima logo" width={89} height={48} />
					<div className="space-y-2">
						<h3 className="text-medium text-[8px] md:text-xs ">Kaima400@gmail.com</h3>
						<h3 className="text-medium text-[8px] md:text-xs  ">CC 2023</h3>
					</div>
				</div>

				<div className="hidden md:flex w-[100px]"></div>

				{/* -------------- */}
				<div className="grid-cols-3 gap-y-8 gap-4 md:gap-0 text-[#F5F5F5B2] md:grid-cols-5 w-full md:w-[70%] grid ">
					<div className="col_list text-center  ">
						{navOne.map((i, k) => (
							<h3
								key={k}
								onClick={() => handleScrollToSection(i.link)}
								className="text-medium text-[8px] md:text-xs  cursor-pointer"
							>
								{i.name}
							</h3>
						))}
					</div>

					<div className="col_list   ">
						{navTwo.map((i, k) => (
							<h3 key={k} className="text-medium text-[8px] md:text-xs ">
								{i.name}
							</h3>
						))}
					</div>

					<div className="col_list  ">
						{navThree.map((i, k) => (
							<h3 key={k} className="text-medium text-[8px] md:text-xs ">
								{i.name}
							</h3>
						))}
					</div>

					<div className="col_list hidden md:block w-[50%] "></div>

					<div className="col_list items-end flex   w-[140%]  ">
					
							
						<h3 className="text-medium text-[8px]  md:text-xs text-[#f5f5f54d]">
					A Product Of Kaima Business LTD, 2023
				</h3>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
