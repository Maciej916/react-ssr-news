import axios from 'axios';
// import { returnErrors } from './errorActions';

import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
} from './types';

export const loadUser = () => (dispatch, getState) => new Promise((resolve) => {
	dispatch({ type: USER_LOADING });
	axios
		.get('http://localhost:4000' + '/users/user', tokenConfig(getState))
		.then(res => {
			dispatch({ type: USER_LOADED, payload: res.data });
			resolve();
		})
		.catch(err => {
			// dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({ type: AUTH_ERROR });
			resolve();
		});
});






export const login = (data) => dispatch => {
	if (data.success) {
		dispatch({
			type: LOGIN_SUCCESS,
			payload: data
		});
	} else {
		// dispatch(returnErrors(data.message, 500));
		dispatch({
			type: LOGIN_FAIL
		});
	}
};

export const logout = () => {
	return {
		type: LOGOUT_SUCCESS
	};
};

export const tokenConfig = getState => {

	console.log(getState().user)

	const token = getState().user.token;


	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	};

	if (token) {
		config.headers['x-auth-token'] = token;
	}

	return config;
};