import Image from 'next/image';
import React, { useState } from 'react';

const faqArray = [
	{
		id: 0,
		question: 'What is the duration for leasing a space?',
		answer: 'As soon as you secure a space, you can choose the length of your lease, which can be as brief as one month.',
		isOpen: false
	},
	{
		id: 1,
		question: 'Can space seekers get spaces in units?',
		answer: 'Yes, space seekers can obtain unit spaces. This is handled by the multi-tenant feature.',
		isOpen: false
	},
	{
		id: 2,
		question: 'Are warehouse spaces available for sale?',
		answer: 'The team also provides the acquisition of warehouses or storage spaces as an extra service.',
		isOpen: false
	},
	{
		id: 3,
		question: 'How fast can the transactions in leasing spaces be concluded?',
		answer: 'Transactions can be completed in as little as 5 minutes after the process begins',
		isOpen: false
	},
	{
		id: 4,
		question: 'Can we view the spaces?',
		answer: 'Yes, the integrated 360 degree view allows you to view spaces from the comfort of your own home.',
		isOpen: false
	},
	{
		id: 5,
		question: 'Are there available renewal plans on leased spaces?',
		answer: 'Yes you can renew your plan on a leased space, you however should specify on booking a storage space or warehouse',
		isOpen: false
	}
];
const Faq = () => {
	const [list, setList] = useState(faqArray);

	const handleToggle = (id) => {
		const newList = list.map((item) => {
			if (item.id === id) {
				const updatedItem = {
					...item,
					isOpen: !item.isOpen
				};
				return updatedItem;
			}
			return item;
		});
		setList(newList);
	};

	return (
		<section
			id="faq"
			className="faq-section flex justify-center flex-col bg-primary-cream w-full px-14 relative h-auto pt-[100px] py-[250px] lg:pb-[200px] xl:py-[100px] "
		>
			<div className="max-w-[1400px] mx-auto ">
				<h2 className="text-pri-dark text-xl font-bold faq-section__header">
					FREQUENTLY ASKED QUESTIONS
				</h2>
				<div className="faq-section__sub-header pt-2 text-txt-light -alt">
					If you have any further questions please contact us
				</div>

				<div className="faq my-6 xl:w-[80%] flex flex-wrap gap-4 ">
					{list.map((faq) => {
						const { id, question, answer, isOpen } = faq;
						return (
							<div
								key={id}
								className={`${
									isOpen ? 'active' : ''
								} flex flex-col w-[100%] lg:w-[400px] p-4 border border-pri rounded-md`}
								cascade
								damping={1e-1}
								direction="up"
							>
								<div>
									<span
										onClick={() => handleToggle(id)}
										className={`relative cursor-pointer flex items-start min-h-[60px] justify-between z-10`}
									>
										<p className="faq-item__question text-txt-light text-sm lg:text-[16px] 2xl:text-lg font-semibold w-[80%]">
											{question}
										</p>
										{isOpen ? (
											<Image
												src={'/icons/close.svg'}
												width="30"
												height="30"
												alt=""
											/>
										) : (
											<Image
												src={'/icons/plus.svg'}
												width="25"
												height="25"
												alt=""
											/>
										)}
									</span>
									{isOpen ? <p className="faq-item__answer text-txt-light">{answer}</p> : null}
								</div>
							</div>
						);
					})}
				</div>

				{/* <div className="absolute bottom-0 z-0 right-0 faq-image">
					<Image src="/images/faq.png" width="200" height="200" alt="" />
				</div> */}
			</div>
		</section>
	);
};

export default Faq;
