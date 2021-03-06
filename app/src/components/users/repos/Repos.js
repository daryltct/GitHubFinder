import React, { useContext } from 'react';

import RepoItem from './RepoItem';
import { UserContext } from '../../../context/user/UserContext';

function Repos() {
	const { userRepos } = useContext(UserContext);

	const repoComponents = userRepos.map((repo) => {
		return <RepoItem key={repo.id} repo={repo} />;
	});

	return <div>{repoComponents}</div>;
}

export default Repos;
