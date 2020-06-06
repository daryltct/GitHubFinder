import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav className="navbar bg-primary">
			<Link to="/">
				<h1>
					<i className="fab fa-github" /> GitHubFinder
				</h1>
			</Link>
		</nav>
	);
}

export default NavBar;
