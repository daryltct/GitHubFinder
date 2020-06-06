import React from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Users from './components/users/Users';

function App() {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Users />
			</div>
		</div>
	);
}

export default App;
