import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Alert from './components/layouts/Alert';
import Home from './components/pages/Home';
import User from './components/users/User';

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<div className="container">
					<Alert />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/user/:login">
							<User />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
