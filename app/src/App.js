import React from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import UserItem from './components/users/UserItem';

function App() {
	return (
		<div>
			<NavBar />
			<UserItem />
			<h1>hello world</h1>
		</div>
	);
}

export default App;
