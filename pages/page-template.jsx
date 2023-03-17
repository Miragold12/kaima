import React, { useState } from 'react';
import DashboardLayout from 'layout/LandingPageLayout';

const PageName = () => {
	return <></>;
};

PageName.getLayout = function (page) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default PageName;
