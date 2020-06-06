import React, { useState } from 'react';

function Search() {
	const [ text, setText ] = useState('');

	function handleChange(event) {
		const { value } = event.target;
		setText(value);
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input type="text" placeholder="Search Users" value={text} onChange={handleChange} />
			<input type="submit" value="Search" className="btn btn-dark btn-block" />
		</form>
	);
}

export default Search;
