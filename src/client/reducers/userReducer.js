import Cookies from 'js-cookie';

import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS
} from '../actions/types';

const initialState = {
	token: null,
	isAuthenticated: null,
	isLoading: false,
	user: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true
			};
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload
			};
		case LOGIN_SUCCESS:
			Cookies.set('token', action.payload.token, { expires: 30 });
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT_SUCCESS:
			Cookies.remove('token');
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false
			};
		default:
			return state;
	}
}