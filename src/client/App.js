import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ErrorBoundary from './components/ErrorBoundry';
import Header from './components/Header';
import Footer from './components/Footer';

import { loadUser } from './actions/userActions';

const App = ({ route, user }) => (
	<ErrorBoundary>
		{renderRoutes(route.routes, { user })}
	</ErrorBoundary>
);


App.propTypes = {
	route: PropTypes.objectOf(PropTypes.any),
	loadUser: PropTypes.func
};

App.defaultProps = {
	route: null,
	loadUser: null
};

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

const loadData = (store, param) => {
	return store.dispatch(loadUser());
};

export default { component: connect(mapStateToProps, { loadUser })(App), loadData };

