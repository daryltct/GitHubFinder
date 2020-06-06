import React from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Users from './components/users/Users';
import UserItem from './components/users/UserItem';

function App() {
	return (
		<div>
			<NavBar />
			<Users />
		</div>
	);
}

export default App;
