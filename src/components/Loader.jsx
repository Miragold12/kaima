import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import Navbar from 'components/Navbar';
import Button from 'components/Button';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const Loader = ({ brand }) => {
	const loaderRef = useRef();

	return (
		<AnimatePresence>
			{/* loader container */}
			<motion.div
				id="loader"
				className="loader_white w-screen relative p-6 md:p-0  h-screen"
				ref={loaderRef}
			>
				<div className="image_group_cards md:block hidden md:py-[40px] md:px-[60px] w-full h-full  ">
					<div className="w-full h-full  relative">
						{brand ? (
							<Image
								src={'/images/k_loader-brand.png'}
								priority
								placeholder="blur"
								blurDataURL={'/images/k_loader.png'}
								fill
								alt="kaima image"
								className="hidden md:block"
							/>
						) : (
							<Image
								src={'/images/k_loader.png'}
								priority
								placeholder="blur"
								blurDataURL={'/images/k_loader.png'}
								fill
								alt="kaima image"
								className="hidden md:block"
							/>
						)}
					</div>
				</div>

				<div
					className={`md:hidden h-full w-full  ${
						brand ? 'mobile_bg_laoder-brand' : 'mobile_bg_laoder'
					}`}
				></div>
				<div className={'mobile_overlay'}></div>


				{/* overlay */}
				<motion.div
					initial={{
						opacity: 1
					}}
					animate={{
						opacity: 0,
						transition: {
							delay: 6,
							duration: 3.2,
							ease: 'easeOut'
						}
					}}
					className={`overlay centered absolute w-full h-full top-0 left-0  ${
						brand ? 'fadeOut-brand' : 'fadeOut'
					} `}
				>
					<div className="content ">
						<div className="mx-auto  centered">
							<Image src="/images/k_logo.svg" alt="kaima logo" width={159} height={90} />
						</div>

						<h1 className="text-center pulse capitalize	 font-personal text-[18.75px] md:text-[45.78px] md:leading-[109.47px] mt-[22px] text-[#F5F5F5] font-normal">
							
							{brand ? 'grow your fashion brand' : 'Stylist In Your Pocket'}
						</h1>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Loader;
