import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';

function Users() {
	const [ usersData, setUsersData ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	//Fetch users data when component mounts
	useEffect(() => {
		fetch('https://api.github.com/users')
			.then((res) => res.json()) //
			.then((data) => {
				setUsersData(data);
				setIsLoading(true);
			});
	}, []);

	const usersComponents = usersData.map((user) => {
		return <UserItem key={user.id} user={user} />;
	});

	return <div>{usersComponents}</div>; //
}

export default Users;
