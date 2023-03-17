import * as Yup from 'yup';

export const loginSchema = {
	email: Yup.string().email('Must be a valid email').required('Email is required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Password is required')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
		)
};

export const registerSchema = {
	firstName: Yup.string().required('*Required'),
	username: Yup.string(),
	role: Yup.string(),
	lastName: Yup.string().required('*Required'),
	phone: Yup.string().max(11, 'Must be 11 numbers').required('Required'),
	email: Yup.string().email('Must be a valid email').required('Email is required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Password is required')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
		),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Password must match')
		.required('Confirm password is required')
};

export const contactSchema = {
	fullName: Yup.string().required('*Required'),
	email: Yup.string().email('Must be a valid email').required('Email is required'),
	category: Yup.string().required('*Required'),
	phoneNumber: Yup.string().max(11, 'Must contain 11 numbers').required('*Required'),
	message: Yup.string().required('*Required')
};
