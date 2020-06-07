import React, { useReducer } from 'react';
import userReducer from './userReducer';
import axios from 'axios';

const UserContext = React.createContext();

const github = axios.create({
	baseURL: 'https://api.github.com',
	timeout: 2000,
	headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN }
});

const initialState = {
	usersData: [],
	userDetails: {},
	userRepos: [],
	loading: false
};

function UserContextProvider(props) {
	const [ userState, dispatch ] = useReducer(userReducer, initialState);

	//Search for users
	async function searchUser(text) {
		const res = await github.get(`/search/users?q=${text}`);
		return res.data.items;
	}

	//Get selected user details
	async function getUser(username) {
		//get user data
		const user = await github.get(`/users/${username}?`);
		//get user repos
		const repos = await github.get(`/users/${username}/repos?per_page=5&sort=created:asc?`);
		return {
			user: user.data,
			repos: repos.data
		};
	}

	return (
		<UserContext.Provider value={{ ...userState, dispatch, searchUser, getUser }}>
			{props.children}
		</UserContext.Provider>
	);
}

export { UserContextProvider, UserContext };
