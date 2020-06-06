import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { AlertContext } from './AlertContext';

const UserContext = React.createContext();

const github = axios.create({
	baseURL: 'https://api.github.com',
	timeout: 2000,
	headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN }
});

function UserContextProvider(props) {
	const [ usersData, setUsersData ] = useState([]);
	const [ userDetails, setUserDetails ] = useState({});
	const [ userRepos, setUserRepos ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	const { handleAlert } = useContext(AlertContext);

	//Search for users
	async function searchUser(text) {
		setLoading(true);
		const res = await github.get(`/search/users?q=${text}`);
		setUsersData(res.data.items);
		setLoading(false);
	}

	//Get selected user details
	async function getUser(username) {
		setLoading(true);
		//get user details
		const user = await github.get(`/users/${username}?`);
		setUserDetails(user.data);
		//get user repos
		const repos = await github.get(`/users/${username}/repos?per_page=5&sort=created:asc?`);
		setUserRepos(repos.data);
		setLoading(false);
	}

	function clearUsers() {
		setUsersData([]);
	}

	return (
		<UserContext.Provider value={{ usersData, loading, searchUser, clearUsers, userDetails, getUser, userRepos }}>
			{props.children}
		</UserContext.Provider>
	);
}

export { UserContextProvider, UserContext };
