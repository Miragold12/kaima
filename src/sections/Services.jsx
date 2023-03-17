import Image from 'next/image';
import React from 'react';
import { ServicesData } from '../utils/sectionData';
// import { Fade } from 'react-awesome-reveal';
import { GiVacuumCleaner } from 'react-icons/gi';
import { MdOutlineCleaningServices } from 'react-icons/md';

const Services = () => {
	return (
		<div className=" services space-y-4 py-14 w-full bg-[#F5F5F5] text-center">
			<div className="w-full mx-auto max-w-[1400px] md:w-[85%]">
				<div className="centered">
					<div className="top_icon p-2 rounded-full border border-sec">
						<GiVacuumCleaner className="text-4xl text-pri-dark" />
					</div>
				</div>
				<div className="">
					<h1 className="text-pri-dark text-lg font-semibold uppercase pb-2">our services</h1>
					<h1 className="font-bold text-sec text-2xl md:text-4xl ">What we offer.</h1>
				</div>

				<div className="mt-8">
					<div className="card_List grid grid-cols-1 gap-10 justify-center items-center place-content-center w-full md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
						{/* <Fade direction="up" damping={1e-1}> */}
						{ServicesData?.map((item, key) => {
							console.log(item.color);
							return (
								<div key={key} className="card_item ">
									{/* <div className="icon absolute -top-10 services-icon">
											<Image
												src={item.image}
												width={70}
												height={68}
												alt="icons"
											/>
										</div> */}

									<div className=" centered">
										<div className="icon_box p-3 relative">
											<MdOutlineCleaningServices className="icon_ text-[50px] z-10 text-sec" />
										</div>
									</div>

									<h1 className="card_title text-pri-dark text-xl">{item.title}</h1>

									<div className="card_body_text text-txt-light text-sm">
										<p className=" mt-4">{item.text}</p>
									</div>
								</div>
							);
						})}
						{/* </Fade> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
