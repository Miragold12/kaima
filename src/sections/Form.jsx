import React, { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik';
import Button from 'components/Button';
import * as Yup from 'yup';
import Navbar from 'components/Navbar';
import Image from 'next/image';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const Form = ({ onValidated, status, message, setIsSuccessfull, setIsLoading }) => {
      const firstNameRef = useRef();
	const contactRef = useRef();

	const formik = useFormik({
		initialValues: {
			firstname: '',
			email: ''
		},

		// validationSchema: Yup.object(contactSchema),
		onSubmit: async (values) => {
			try {
				console.log('i clicked', values);

				values.email.indexOf('@') > -1 &&
					onValidated({
						MERGE1: values.firstname,
						MERGE0: values.email
					});

                           

                            
			} catch (error) {}
		}
	});


	useEffect(() => {
		if(status == 'success'){
			setIsSuccessfull(true);
		} 
	
		if(status == 'error'){
			setIsSuccessfull(false);
		}
		
	}, [setIsSuccessfull, status])
	





      return (


            <React.Fragment>
            {status == 'sending' ? (
                  <div className="loader_container flex flex-col items-center">
                        {/* image */}
                        <Image
                              src={'/icons/k_loader.svg'}
                              alt="kaima logo"
                              width={80}
                              height={80}
                              className="loader_icon"
                        />

                        {/* text */}
                        <h1 className="font-normal font-personal text-xs md:text-[18.75px]  mt-8 text-txt-white capitalize">
                             Submiting...
                        </h1>
                  </div>
            ) : (
                  <React.Fragment>
                        <h3 className="text-[12px] font-eb font-normal  text-[#F5F5F5B2] capitalize">
                              get early access
                        </h3>

                        <h1 className=" font-personal text-[12px] w-[200px] md:text-[18.75px] leading-[26.89px] md:w-auto md:mx-auto md:leading-[44.83px] mt-[5px] md:mt-[8px] ">
                              Be The First To Know When We Launch
                        </h1>

                        <form
				onSubmit={formik.handleSubmit}
				action=""
				className="form_box flex gap-6  flex-col   mt-[40px]  md:mt-[32px] justify-center items-center md:items-end"
			>
				<div className="form_group  flex flex-col gap-6 items-center ">
					<div className="input_component text-center w-full md:w-[200px] h-auto text-sm text-[#F5F5F5] ">
						<label htmlFor="" className="font-eb text-xs leading-[15.66px] ">
							First Name
						</label>
						<input
							ref={firstNameRef}
							type="text"
							name="firstname"
							id="firstname"
							onChange={formik.handleChange}
							onBlur={formik.handleChange}
							value={formik.values.firstname}
							// placeholder="firstname"
							className="bg-[#F5F5F533] mt-[4px] rounded w-full px-3 p-[7px]  text-xs leading-[15.66px]    text-center"
						/>
					</div>
					{/*  */}
					<div className="input_component text-center w-full md:w-[200px] h-auto text-sm text-[#F5F5F5]">
						<label htmlFor="" className="font-eb text-xs leading-[15.66px]">
							Email Address
						</label>
						<input
							type="text"
							name="email"
							onChange={formik.handleChange}
							placeholder="***@gmail.com"
							value={formik.values.email}
							// value={''}
							id="email"
							className="bg-[#F5F5F533] mt-[4px] rounded w-full px-3 p-[7px] text-xs leading-[15.66px]    text-center"
						/>
					</div>
				</div>
				{/*  */}
				{/* import Button from 'components/Button'; */}
				<div className="pb-[2px] relative  mx-auto">
					<Button
						text={'submit'}
						// click={() => setIsLoading(true)}
						type="submit"
						style={{
							color: '#ffffff',
							padding: '11px 27px',
							fontSize: '14px'
						}}
					/>
				</div>
			</form>
                  </React.Fragment>
            )}
      </React.Fragment>
      )



};

export default Form;
