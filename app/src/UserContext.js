import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = React.createContext();

const github = axios.create({
	baseURL: 'https://api.github.com',
	timeout: 2000,
	headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN }
});

function UserContextProvider(props) {
	const [ usersData, setUsersData ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	async function searchUser(text) {
		setLoading(true);
		const res = await github.get(`/search/users?q=${text}`);
		setUsersData(res.data.items);
		setLoading(false);
	}

	function clearUsers() {
		setUsersData([]);
	}

	return (
		<UserContext.Provider value={{ usersData, loading, searchUser, clearUsers }}>
			{props.children}
		</UserContext.Provider>
	);
}

export { UserContextProvider, UserContext };
