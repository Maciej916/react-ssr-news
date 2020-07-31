/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, Fragment  } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import ArticleDetailModal from '../components/ArticleDetailModal';

import { loadUser, login, logout } from '../actions/userActions';

const SteamPage = props => {

	useEffect(() => {
		window.addEventListener("message", event => {
			if (event.origin !== 'http://localhost:4000') return;
			props.login(event.data);
		});
		// eslint-disable-next-line
  }, []);
  

  console.log(props)



	const handleLogin = () => {
		const popupWindow = window.open(
			'http://localhost:4000' + "/auth/steam",
			"_blank",
			"width=800, height=600",
		);
		if (window.focus) popupWindow.focus();
  };
  
	const authLinks = (



		<Fragment>
			<span className='navbar-text mr-3'>
				<strong>{props.user.user ? `Welcome ${props.user.user.username}` : ''}</strong>
			</span>
			<button onClick={props.logout}>Logout</button>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<img
				onClick={handleLogin}
				src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png"
				alt="Login with Steam"
			/>
		</Fragment>
	);



  return (
    <div>
      <div className="row">
        <div className="section">
          <div className="row">{(props.user.isAuthenticated ? authLinks : guestLinks)}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const loadData = (store, param) => {
  return store.dispatch(loadUser());
};

SteamPage.propTypes = {
  user: PropTypes.object,
  loadUser: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func
};

export default {
  component: connect(mapStateToProps, { loadUser, login, logout })(SteamPage), loadData
};
