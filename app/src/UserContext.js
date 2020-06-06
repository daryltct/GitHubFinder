import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = React.createContext();

function UserContextProvider(props) {
	const [ usersData, setUsersData ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	useEffect(async () => {
		setLoading(true);
		const github = axios.create({
			baseURL: 'https://api.github.com',
			timeout: 2000,
			headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN }
		});
		const res = await github.get('/users');
		setUsersData(res.data);
		setLoading(false);
	}, []);

	return <UserContext.Provider value={{ usersData, loading }}>{props.children}</UserContext.Provider>;
}

export { UserContextProvider, UserContext };
