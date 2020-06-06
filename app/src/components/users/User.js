import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import Spinner from '../layouts/Spinner';

function User() {
	const { userDetails, getUser, loading } = useContext(UserContext);
	const { login } = useParams();

	useEffect(() => {
		getUser(login);
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = userDetails;

	return loading ? <Spinner /> : <div>{name}</div>;
}

export default User;
