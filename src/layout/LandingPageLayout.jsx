import Footer from 'sections/Footer';
import SideBar from 'sections/Footer';
import Navbar from 'components/Navbar';
import React, { Children, useState } from 'react';

const LandingPageLayout = ({ children }) => {
	// const [showNotifications, setShowNotifications] = useState(true);
	return (
		<div className="main_section w-full relative">
			{/* <Navbar /> */}

			{children}
			<Footer />
		</div>
	);
};

export default LandingPageLayout;
