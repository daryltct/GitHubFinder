import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/user/UserContext';
import { AlertContext } from '../../context/AlertContext';

function Search() {
	const { usersData, searchUser, dispatch } = useContext(UserContext);
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
			dispatch({ type: 'SET_LOADING' });
			const res = await searchUser(text);
			dispatch({ type: 'SEARCH_USER', payload: res });
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
				<button className="btn btn-light btn-block" onClick={() => dispatch({ type: 'CLEAR_USERS' })}>
					Clear
				</button>
			)}
		</div>
	);
}

export default Search;
