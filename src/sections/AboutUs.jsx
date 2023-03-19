import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from 'components/Navbar';
import Button from 'components/Button';

const Brown = ({ mode }) => {
	return (
		<section
			id="aboutus"
			className="bg-[#F5F5F5] w-screen  md:h-screen py-6 border border-transparent"
			// ref={sectionRef}
		>
			<div className="brand w-full h-full   px-4 md:px-0 py-3 relative">
				<Navbar active />

				{/* main content */}
				<div className="hero_content relative md:px-[56px] flex flex-col md:flex-row items-center  w-full h-auto py-[46px] md:py-0 ">
					{/* botom right text */}
					{mode === 'brand' ? (
						<p className=" hidden md:block  text-[#F5F5F533] text-xs text-left w-[300px] absolute bottom-0 right-11">
							Kaima is fully committed to your growth, not just as a business but also as a
							brand.
						</p>
					) : (
						<p className=" hidden md:block text-[#f5f5f533] text-xs text-left w-[380px] absolute bottom-0  -right-6">
							Find your own unique style and show up with confidence each time.
						</p>
					)}

					{/* IMAGE sn3D  slider section*/}
					<div className="col_two">
						{/* <Image
							src={
								mode === 'brand'
									? '/images/k_slider_imgs2.png'
									: '/images/k_slider_imgs.png'
							}
							alt={'hero'}
							width={620}
							height={730}
						/> */}
						<Swiper
							// install Swiper modules
							spaceBetween={-50}
							slidesPerView={2.5}
							// navigation
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
							onSwiper={(swiper) => console.log(swiper)}
							onSlideChange={() => console.log('slide change')}
							effect={'coverflow'}
							grabCursor={true}
							centeredSlides={true}
							// slidesPerView={'auto'}
							coverflowEffect={{
								// rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true
							}}
							modules={[EffectCoverflow, Pagination]}
							className="mySwiper"
						>
							<SwiperSlide>
								<Image
									src={'/images/slider/one.png'}
									alt={'hero'}
									width={261}
									height={480}
								/>
							</SwiperSlide>

							<SwiperSlide>
								<Image
									src={'/images/slider/one.png'}
									alt={'hero'}
									width={261}
									height={480}
								/>
							</SwiperSlide>

							<SwiperSlide>
								<Image
									src={'/images/slider/one.png'}
									alt={'hero'}
									width={261}
									height={480}
								/>
							</SwiperSlide>

							<SwiperSlide>
								<Image
									src={'/images/slider/one.png'}
									alt={'hero'}
									width={261}
									height={480}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={'/images/slider/one.png'}
									alt={'hero'}
									width={261}
									height={480}
								/>
							</SwiperSlide>
						</Swiper>
					</div>
					{/*  */}

					<div className="space_x h-8 md:h-0 md:w-[100px]"></div>

					{/* TEXT */}
					{mode === 'brand' ? (
						<div className="col_one w-full px-4  p-6 md:p-0    text-center md:text-left md:w-[480px]">
							<p className="text-xm text-[#F5F5F580] font-normal	 font-eb leading-[20px]">
								Build Brand Credibility
							</p>

							<h1 className="hidden  w-[550px] md:block text-bigger font-personal text-lg md:text-[29.3px] text-[#F5F5F5] leading-[70.06px] ">
								<span style={{ fontSize: '50px' }} className="text-sec you mr-2">
									Sales
								</span>
								And Exposure, Networking And
								<span style={{ fontSize: '50px' }} className="text-sec you ml-2">
									Growth
								</span>
							</h1>

							{/* mobile */}

							<h1 className="md:hidden font-personal text-[18.75] md:text-[25.3px] text-txt-white leading-[44.83px] ">
								Sales And Exposure
							</h1>

							<h3 className="hidden mt-[16px] md:flex font-normal text-[15px] md:text-[18.75px] text-[#F5F5F599] font-eb">
								We connect you to paying customers that see the value your brand brings
								to the table. Kaima helps you take charge of your business growth by
								giving you tools, a platform and due exposure We connect you to paying
								customers that see the value your brand brings to the table.
							</h3>

							{/* mobile */}

							<h3 className="md:hidden  mt-[8px] w-[270px] mx-auto  text-[15px] md:text-[18.75] text-txt-white-fade leadiing-[30px]">
								We connect you to paying customers that see the value your brand brings
								to the table.
							</h3>

							<div className="middle justify-center md:justify-start md:mt-[32px] mt-[24px]  space-x-2">
								<div className="md:hidden w-4"></div>

								<Button text={'Get Started'} style={{ color: '#fff' }} />
								<Image
									src={'/icons/k_arrow.svg'}
									alt={'hero'}
									width={31}
									height={29}
									className=" mt-4 md:mt-0	"
								/>
							</div>
						</div>
					) : (
						<div className="col_one w-full px-4  p-6  md:p-0   text-center md:text-left md:w-[490px]">
							{/* big text */}
							<p className="text-[12px] font-eb leading-[20px] text-[#f5f5f580]">
								You Deserve Better Fashion
							</p>

							<div className="main h-[90px] md:h-[140px] ">
								<h1 className=" font-personal relative text-[18.75] md:text-[29.3px] text-txt-white leading-[44.83px] md:leading-[70.06px] ">
									Professional Personal
								</h1>

								<div className=" middle space-x-2  mx-auto md:mx-0 justify-center md:justify-start">
									<h1 className="font-personal relative text-lg md:text-[29.3px] text-txt-white leading-[70.06px]">
										Styling For
									</h1>

									<div className="text-sec you relative">
										<Image
											src={'/icons/k_lines.svg'}
											alt={'lines'}
											width={89.33}
											height={30.221}
											className={'absolute -bottom-0  md:-bottom-3'}
										/>
										<h1 className="font-personal text-sec relative text-lg md:text-[29.3px] leading-[70.06px]">
											You
										</h1>
									</div>
								</div>
							</div>

							<h3 className=" text-[15px] md:text-[18.75px] md:mt-[16px] text-[#F5F5F5B2] leading-[30px] font-eb font-normal mt-[20px]">
								With Kaima, luxury styling has been made accessible to you 24/7.
								Irrespective of time or budget, there is always something perfect for
								you right in your pocket.
							</h3>

							<div className="middle justify-center md:justify-start mt-[24px] md:mt-[32px]  md:space-x-2">
								<div className="md:hidden w-4"></div>
								<Button
									text={'Get early access'}
									click={() => handleScrollToSection('contact')}
									style={{ color: '#fff' }}
								/>
								<Image
									src={'/icons/k_arrow.svg'}
									className=" mt-4 md:mt-0	"
									alt={'hero'}
									width={31}
									height={29}
								/>
							</div>
						</div>
					)}

					{mode === 'brand' ? (
						<>
							<div className="text-small-fade md:hidden text-center space-y-3  mt-11 w-[300px] ">
								<h1 className="md:hidden font-personal text-sm   text-txt-white leading-[190%] ">
									Networking and Growth
								</h1>
								<p className="text-small-fade mt-3 text-[#f5f5f533] text-sm text-center w-[300px] ">
									Kaima is fully committed to your growth, not just as a business
									but also as a brand.
								</p>
							</div>

							<p className="text-small-fade mt-11 mx-4 hidden text-[#f5f5f533] text-sm text-center md:text-left md:w-[300px]">
								Kaima is fully committed to your growth, not just as a business but also
								as a brand.
							</p>
						</>
					) : (
						<p className=" mt-[44px]  mx-4 md:hidden text-[#f5f5f533] text-xs leading-[20px] text-center md:text-left md:w-[300px]">
							We have made it possible for you to explore new opportunities and express
							yourself confidently through professional
						</p>
					)}
				</div>
			</div>
			{/* <OfferSpaces /> */}
		</section>
	);
};

export default Brown;
