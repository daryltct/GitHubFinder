import React, { useState } from 'react';

function UserItem(props) {
	//useState Hooks
	const [ id, setId ] = useState('id');
	const [ login, setLogin ] = useState('mojombo');
	const [ avatar, setAvatar ] = useState('https://avatars0.githubusercontent.com//u/1?v=4');
	const [ url, setUrl ] = useState('https://github.com/mojombo');

	return (
		<div className="card text-center">
			<img src={avatar} className="round-img" style={{ width: 50 }} />
			<h3>{login}</h3>
			<div>
				<a href={url} className="btn btn-dark btn-sm my-1">
					More
				</a>
			</div>
		</div>
	);
}

export default UserItem;
