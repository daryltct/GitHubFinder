import React, { useState } from 'react';

function UserItem({ user }) {
	const { login, avatar_url, html_url } = user;

	return (
		<div className="card text-center">
			<img src={avatar_url} className="round-img" style={{ width: 50 }} />
			<h3>{login}</h3>
			<div>
				<a href={html_url} className="btn btn-dark btn-sm my-1">
					More
				</a>
			</div>
		</div>
	);
}

export default UserItem;
