import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';

function Users() {
	const { usersData, loading } = useContext(UserContext);

	const usersComponents = usersData.map((user) => {
		return <UserItem key={user.id} user={user} />;
	});

	return loading ? <Spinner /> : <div className="grid-3">{usersComponents}</div>;
}

export default Users;
