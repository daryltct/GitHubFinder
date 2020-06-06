import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { AlertContext } from '../../context/AlertContext';

function Search() {
	const { usersData, searchUser, clearUsers } = useContext(UserContext);
	const { handleAlert } = useContext(AlertContext);
	const [ text, setText ] = useState('');

	function handleChange(event) {
		const { value } = event.target;
		setText(value);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		if (text === '') {
			handleAlert('Please enter something', 'light');
		} else {
			await searchUser(text);
			setText('');
		}
	}

	const showClear = usersData.length > 0 ? true : false;

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<input type="text" placeholder="Search Users" value={text} onChange={handleChange} />
				<input type="submit" value="Search" className="btn btn-dark btn-block" />
			</form>
			{showClear && (
				<button className="btn btn-light btn-block" onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
}

export default Search;
