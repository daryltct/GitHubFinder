import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../UserContext';
import UserItem from './UserItem';

function Users() {
	const { usersData, loading } = useContext(UserContext);

	const usersComponents = usersData.map((user) => {
		return <UserItem key={user.id} user={user} />;
	});

	return <div className="grid-3">{usersComponents}</div>; //
}

export default Users;
