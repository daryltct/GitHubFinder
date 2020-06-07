export default function userReducer(state, action) {
	switch (action.type) {
		case 'SET_LOADING':
			return {
				...state,
				loading: true
			};
		case 'SEARCH_USER':
			return {
				...state,
				usersData: action.payload,
				loading: false
			};
		case 'GET_USER':
			return {
				...state,
				userDetails: action.payload.user,
				userRepos: action.payload.repos,
				loading: false
			};
		case 'CLEAR_USERS':
			return {
				...state,
				usersData: [],
				loading: false
			};
		default:
			return state;
	}
}
