import React, { useEffect, useContext, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import Spinner from '../layouts/Spinner';
import Repos from './repos/Repos';

function User() {
	const { userDetails, userRepos, getUser, loading } = useContext(UserContext);
	const { login } = useParams();

	useEffect(() => {
		getUser(login);
		console.log(userRepos);
	}, []);

	const {
		name,
		company,
		avatar_url,
		location,
		bio,
		blog,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = userDetails;

	return loading ? (
		<Spinner />
	) : (
		<Fragment>
			<Link to="/" className="btn btn-light">
				Back to Search Results
			</Link>
			Hireable: <i className={hireable ? 'fas fa-check text-success' : 'fas fa-times-circle text-danger'} />
			<div className="card grid-2">
				<div className="all-center">
					<img src={avatar_url} className="round-img" alt="" style={{ width: 150 }} />
					<h1>{name}</h1>
					<p>Location: {location}</p>
				</div>
				<div>
					{bio && (
						<Fragment>
							<h3>Bio</h3>
							<p>{bio}</p>
						</Fragment>
					)}
					<a href={html_url} className="btn btn-dark my-1">
						Visit GitHub Profile
					</a>
					<ul>
						<li>
							{login && (
								<Fragment>
									<strong>Username: </strong> {login}
								</Fragment>
							)}
						</li>

						<li>
							{company && (
								<Fragment>
									<strong>Company: </strong> {company}
								</Fragment>
							)}
						</li>

						<li>
							{blog && (
								<Fragment>
									<strong>Website: </strong> {blog}
								</Fragment>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className="card text-center">
				<div className="badge badge-primary">Followers: {followers}</div>
				<div className="badge badge-success">Following: {following}</div>
				<div className="badge badge-light">Public Repos:: {public_repos}</div>
				<div className="badge badge-dark">Public Gists: {public_gists}</div>
			</div>
			<Repos />
		</Fragment>
	);
}

export default User;
