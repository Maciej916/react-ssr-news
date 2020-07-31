import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

const RequireAuth = ({ location, route, user }) => {
	return user.isAuthenticated ? renderRoutes(route.routes, { user }) : <Redirect to={{
		pathname: '/login',
		state: { referrer: location.pathname }
	}} />;
};

RequireAuth.propTypes = {
	route: PropTypes.objectOf(PropTypes.any),
	user: PropTypes.objectOf(PropTypes.any)
};

RequireAuth.defaultProps = {
	route: null
};

export default {
	component: RequireAuth
};