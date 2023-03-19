import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';

import { useRouter } from 'next/router';

import Button from './Button';
const navArray = [
	{
		name: 'Home',
		link: 'home'
	},

	{
		name: 'Contact',
		link: 'contact'
	},

	{
		name: 'Styling',
		link: 'about'
	},

	{
		name: 'Shop',
		link: 'how'
	}
];

// listen to browser scroll
const Navbar = ({ toggle, active }) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [openMobileMenu, setOpen] = useState(false);

	const router = useRouter();

	// console.log(scrollPosition);

	// console.log(loggedInUser, 'logged in user from the navbar');

	// HANDLERS ---------------------------
	function handleScroll() {
		let currentScroll = window.scrollY;
		setScrollPosition(Math.floor(currentScroll));
	}

	function handleScrollToSection(id) {
		// console.log(id);
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
		console.log('i scrolled');
	}

	function handleMenu() {
		setOpen(false);
	}

	function handleCTO() {
		let { pathname } = router;

		console.log(pathname === '/brand');
		if (pathname === '/brand') return router.push('/');
		router.push('/brand');
	}

	function disableBodyScroll(val) {
		if (typeof window !== undefined && val) {
			let bodyEle = document.getElementsByTagName('body')[0];
			bodyEle.style.overflowY = 'hidden';
		}
	}

	// function autoScrollIntoView(params) {
	// 	// deFine set fo Regions
	// 	const aboutSectionRegion = scrollPosition >= 450;
	// 	console.log(aboutSectionRegion);
	// 	if (aboutSectionRegion) handleScrollToSection('about');
	// }
	// HANDLERS ---------------------------

	// USEFEECTS ---------------------------
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	useEffect(() => {
		if (openMobileMenu) {
			disableBodyScroll(openMobileMenu);
		} else {
			let bodyEle = document.getElementsByTagName('body')[0];
			bodyEle.style.overflowY = 'scroll';
		}
	}, [openMobileMenu]);

	// useEffect(() => {
	// 	window.addEventListener('scroll', autoScrollIntoView());
	// 	return () => {
	// 		window.removeEventListener('scroll', autoScrollIntoView());
	// 	};
	// });

	// USEFEECTS ---------------------------

	// let abouttRegion = scrollPosition >= 650 && scrollPosition <= 1500;
	// let contactRegion = scrollPosition >= 4150;

	return (
		<>
			<nav className={`navbar ${active && 'hidden md:flex'}`}>
				<div className={`second_row   w-full`}>
					{/* LOGO */}
					<div className="logo_nav-container space-x-11  middle">
						<Link href={'/'} className="logo_container middle space-x-3">
							{active ? (
								<Image
									src="/icons/k_logo_sec.svg"
									alt="kaima logo"
									width={89}
									height={48}
								/>
							) : (
								<Image
									src="/icons/k_logo_main.svg"
									alt="kaima logo"
									width={89}
									height={48}
								/>
							)}

							{/* <h1 className="logo-text font-bold text-xl md:text-2xl">kaima</h1> */}
						</Link>
					</div>

					{/* NAVBAR */}
					<div
						className={`nav_item-list h-[61px] ${
							active ? 'text-white hidden' : ' text-txt lg:flex md:middle'
						}   items-center hidden   space-x-14 font-normal hover:text-txt-hover`}
					>
						{navArray.map((item, key) => (
							<button
								offset="100"
								title={item.name}
								onClick={() => handleScrollToSection(item.link)}
								href={item.link}
								key={key}
							>
								<h1
									key={key}
									className={`font-normal font-eb text-[12px] leading-[15.66px]`}
								>
									{item.name}
								</h1>
							</button>
						))}
					</div>

					{/* CTO BUTTON */}
					{active ? (
						<Button
							text={router.pathname == '/brand' ? 'Customer?' : 'Brand?'}
							variant={'secondary'}
							style={{ color: 'white' }}
							click={() => handleCTO()}
							id={'brand_btn'}
						/>
					) : (
						<Button
							id={'brand_btn'}
							text={router.pathname == '/brand' ? 'Customer?' : 'Brand?'}
							click={() => handleCTO()}
							variant={'secondary'}
						/>
					)}

					{/* HANBURGER ------------------*/}
					<div className={`hanburger hidden lg:hidden ${openMobileMenu ? 'close' : ''} `}>
						<Hamburger toggled={openMobileMenu} toggle={setOpen} size={20} />
					</div>
				</div>
			</nav>

			{openMobileMenu && (
				<div className="mobile-menu fixed top-0 z-40 left-0 bg-pri grid place-content-center h-[100vh] p-4 py-6">
					<div className="link-list flex flex-col space-y-3 my-2 text-white">
						{navArray.map((item, key) => (
							<Link
								offset="100"
								href={item.link}
								key={key}
								className="hover:bg-white hover:text-pri flex items-center py-3 justify-center"
								onClick={handleMenu}
							>
								<h2 key={key} className="nav_ text-sm md:text-xl ">
									{item.name}
								</h2>
							</Link>
						))}
					</div>
					<hr className={'w-full'} />
					<div className="cto_btn-container space-y-2 my-3">
						<button
							onClick={toggle}
							className={`btn px-6 md:text-xl p-2 font-bold rounded border border-white text-pri bg-white hover:bg-pri hover:text-white`}
						>
							GET STARTED
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
