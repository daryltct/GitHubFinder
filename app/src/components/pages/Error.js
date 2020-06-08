import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/user/UserContext';

function Error() {
	const { dispatch } = useContext(UserContext);
	return (
		<div>
			<h1>Something went wrong!</h1>
			<p className="lead">The page you're looking for does not exist.</p>

			<Link to="/">
				<button className="btn btn-light" onClick={() => dispatch({ type: 'CLEAR_ERROR' })}>
					Back to Home
				</button>
			</Link>
		</div>
	);
}

export default Error;
