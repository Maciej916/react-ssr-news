import React, { useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../actions/userActions';

const Login = ({ location, referrer, route, user, login }) => {

	useEffect(() => {
		window.addEventListener("message", event => {
			if (event.origin !== 'http://localhost:4000') return;
			login(event.data);
		});
	}, []);

	const handleLogin = () => {
		const popupWindow = window.open(
			'http://localhost:4000' + "/auth/steam",
			"_blank",
			"width=800, height=600",
		);
		if (window.focus) popupWindow.focus();
	};

	return user.isAuthenticated ? <Redirect to={location.state && location.state.referrer ? location.state.referrer : "/dashboard"} /> : (
		<>
			<img
				onClick={handleLogin}
				src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png"
				alt="Login with Steam"
			/>

		</>
	);
};

Login.propTypes = {
	route: PropTypes.objectOf(PropTypes.any),
	user: PropTypes.objectOf(PropTypes.any),
	login: PropTypes.func
};

Login.defaultProps = {
	route: null,
	user: null
};

export default {
	component: connect(null, { login })(Login)
};
