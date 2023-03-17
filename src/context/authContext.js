import React, { useContext, useState, useEffect, useMemo, createContext, Children } from 'react';

const AuthContext = createContext({});

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const [loggedInUser, setLogedInUser] = useState({
		role: 'spaceowner'
	});

	function initializeUser() {
		let User = localStorage.getItem('warehouse-user');

		if (User) {
			console.log('user has been initialized to state');
			setLogedInUser(JSON.parse(User));
		}
	}

	useEffect(() => {
		initializeUser();
	}, [setLogedInUser]);

	useEffect(() => {});

	// -----------------useEffect

	return <AuthContext.Provider value={{ loggedInUser, setLogedInUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
