/* eslint-disable no-underscore-dangle */
// Startup point for client-side application

import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import reducers from './reducers';
import Routes from './Routes';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const enhancer = global.window && global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = [thunk];

const store = createStore(reducers, state, compose(
	applyMiddleware(...middleware),
	enhancer
));

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			{renderRoutes(Routes)}
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
