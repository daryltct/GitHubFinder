import React, { useState, useContext } from 'react';
import { UserContext } from '../../UserContext';

function Search() {
	const { usersData, searchUser, clearUsers } = useContext(UserContext);
	const [ text, setText ] = useState('');

	function handleChange(event) {
		const { value } = event.target;
		setText(value);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		await searchUser(text);
		setText('');
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
