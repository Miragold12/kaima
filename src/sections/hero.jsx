import Image from 'next/image';
import React from 'react';
import 'swiper/css/effect-fade';
// import { useRouter } from 'next/router';
import Button from 'components/Button';
import Navbar from 'components/Navbar';
import { handleScrollToSection } from 'utils';

const Hero = ({ mode }) => {
	if (mode == 'brand') {
		return (
			<section id="home" className="hero hero-brand w-full  md:h-[110vh]">
				<Navbar />
				<div className="hero_content hero_content-brand  relative flex md:gap-0 flex-col  mt-4  w-full h-full ">
					{/* TEXT  -Row*/}
					<div className="row_one w-full ">
						<h1 className="md:leading-[151.04px] leading-[44.83px] font-personal text-[18.75px] md:text-[71.53px] text-center">
							Kaima For Brands
						</h1>
					</div>

					{/* rmedia --row */}
					<div className="row_two ring-row  w-full flex flex-col-reverse md:flex-row h-auto py-4 gap-4 md:gap-[60px] relative justify-center middle mt-[22px] md:mt-[60px]">
						{/* fade text right top */}
						<p className="hidden md:flex  text-[#1102004D] leading-[20px]  text-[12px]  w-[277px] absolute top-0 right-[58px]">
							Kaima is fully committed to your growth, not just as a business but also as a
							brand.
						</p>

						{/* fade text left bottom */}
						<p className="hidden md:flex  text-[#1102004D] leading-[20px]  text-[12px] w-[310px] absolute bottom-0 left-11">
							We make it easy for you to build a business in the fashion space by growing
							the credibility of your brand.
						</p>

						{/* box one */}
						<div className="col_one md:w-[350px] text-center md:text-left h-auto mt-[150px]   md:-mt-[124px] ">
							<p className="flex text-[12px] leading-[20px] md:leading-[15.66px] w-full centered md:justify-start  font-normal text-[#11020080]">
								Support For Every Step
							</p>

							<h1 className=" font-personal text-[#110200] font-normal text-[18.75px]  md:text-[29.3px]  w-[205px] mx-auto md:mx-0 leading-[44.83px]  md:leading-[70.83px]  md:w-[309px]">
								Grow Your Fashion Brand
							</h1>

							<h3 className="text-medium text-[18.75px] leading-[30px]  text-[#110200B2] w-[349px] md:w-full md:mt-[12px] mt-[8px]">
								Build a business in fashion that you are proud of with our powerful
								tools. Let’s help you grow in the fashion space.
							</h3>

							<div className="button_container md:hidden w-full centered mt-[24px] md:mt-0">
								<Button
									id={'goto_about'}
									text={'Get early access'}
									click={() => handleScrollToSection('contact')}
								/>
							</div>
						</div>

						{/* centered image ----desktop*/}
						<div className="relative hidden md:block  h-[400px] w-[250px] ">
							<div className="middle_image absolute  -top-[30%] ">
								<Image
									placeholder="blur"
									blurDataURL={'/images/k_hero_img_one.webp'}
									src={'/images/brand/K_brand.webp'}
									alt={'hero'}
									width={300}
									height={430}
									// fill
								/>
							</div>
						</div>

						{/* centered image ---mobile */}
						<div className="relative md:hidden h-[280px] w-[250px] ">
							<div className="middle_image absolute -top-[40%]  ">
								<Image
															placeholder="blur"
						blurDataURL={'/images/K_brand_m.webp'}

									src={'/images/brand/K_brand_m.webp'}
									alt={'hero'}
									width={250}
									height={430}
									// fill
								/>
							</div>
						</div>

						{/* col three */}
						<div className="col_three w-[330px] hidden md:flex">
							<div className="sub_col_one  mt-[205px]">
								<h3 className="leading-[30px] text-[18.75px] text-[#11020099] font-eb">
									Don’t let your competition leave you behind. Access a community of
									customers who want to buy from you.
								</h3>

								<Button
									style={{ marginTop: '20px' }}
									text={'Get early access'}
									click={() => handleScrollToSection('contact')}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section id="home" className="hero w-full   ">
			<Navbar />
			{/* HERO CONTENT */}
			<div className="hero_content z-10   relative pt-[10px]  md:pb-[100px]  md:mt-0 flex flex-col-reverse md:flex-row items-center md:justify-between w-full md:pl-[60px]   mx-auto h-auto ">
				{/* TEXT */}
				<div className="col_one w-full px-4  p-6 md:p-0 text-center md:text-left md:w-[490px] z-20 relative">
					<p className="text-xs leading-[20px] font-normal  font-eb text-[#11020081]">
						Style That Speaks Confidence!
					</p>

					<h1 className=" text-[18.75px] leading-[44.83px] text-[#110200]  font-personal mt-2 md:text-[45.78px] md:leading-[85.47px]">
						Stylist In Your Pocket
					</h1>

					<h3 className="font-eb mx-auto md:mx-0  text-[15px] mt-[8px]  md:mt-[16px] font-normal leading-[30px] md:text-[18.75px] text-[rgba(17,2,0,0.7)] text-center md:text-left  w-[311px] md:w-auto">
						Find everything for a perfect fashion lifestyle in one place. Unlock new
						opportunities through great appearance.
					</h3>

					<div className="w-full z-20 flex justify-center md:justify-start mt-[24px] md:mt-[32px]">
						<Button
							text={'Get early access'}
							style={{ padding: '11px 14px' }}
							click={() => handleScrollToSection('contact')}
						/>
					</div>

					<p className="text-[#11020032] md:absolute md:-right-[30%]   mt-[60px] text-[12px] md:text-center font-normal leading-[20px] font-eb w-[274px] hidden md:block">
						We’ve made it possible for you to explore new opportunities and express yourself
						through personal styling.
					</p>
				</div>

				<div className="space_x h-4 md:h-0  md:w-[]"></div>
				{/* IMAGE */}
				<div className="hidden col_two relative w-[334px] h-[332px]   md:max-w-[740px] md:w-[640px]  md:h-[500px] lg:w-[740px]  lg:h-[90vh] md:max-h-[90vh]">
					<Image
						placeholder="blur"
						priority
						src={'/images/k_hero_img_one.webp'}
						blurDataURL={'/images/k_hero_img_one.webp'}
						alt={'hero'}
						// width={640}
						// height={500}
						fill
					/>
				</div>

				<div className="col_two relative w-full h-[322px] md:w-[50%] md:h-[90vh]">
					<Image
						placeholder="blur"
						priority
						src={'/images/k_hero_img_one.webp'}
						blurDataURL={'/images/k_hero_img_one.webp'}
						alt={'hero'}
						// width={640}
						// height={500}
						fill
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
