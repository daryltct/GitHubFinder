import React from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';

function App() {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Search />
				<Users />
			</div>
		</div>
	);
}

export default App;
