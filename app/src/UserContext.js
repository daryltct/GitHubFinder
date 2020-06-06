import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = React.createContext();

function UserContextProvider(props) {
	const [ usersData, setUsersData ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	useEffect(async () => {
		setLoading(true);
		const res = await axios.get('https://api.github.com/users');
		setUsersData(res.data);
		setLoading(false);
	}, []);

	return <UserContext.Provider value={{ usersData, loading }}>{props.children}</UserContext.Provider>;
}

export { UserContextProvider, UserContext };
