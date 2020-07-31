/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import { fetchArticles } from '../actions';
import ArticleDetailModal from '../components/ArticleDetailModal';


import ErrorBoundary from '../components/ErrorBoundry';
import Header from '../components/Header';
import Footer from '../components/Footer';


import { logout } from '../actions/userActions';


const Home = ({ logout }) => {



	return (
		<>

			<button onClick={logout}>Logout</button>

			here

		</>

	);
};

Home.propTypes = {
	logout: PropTypes.func
};

Home.defaultProps = {
	logout: null
};

export default {
	component: connect(null, { logout })(Home)
};