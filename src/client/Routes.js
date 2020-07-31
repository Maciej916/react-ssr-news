import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ArticleListPage from './pages/ArticleListPage';
import SteamPage from './pages/SteamPage';
import App from './App';

import RequireAuth from './pages/RequireAuth';

import Login from './pages/Login';
import Home from './pages/Home';

export default [
	{
		...App,
		routes: [
			{
				path: '/login',
				exaxt: true,
				...Login
			},
			{
				...RequireAuth,
				path: '/',

				routes: [
					{
						path: "/dashboard",
						exaxt: true,
						...Home
					}
				]
			},



			{
				path: '/articles/:id',
				...ArticleListPage
			},
			{
				path: '/steam',
				...SteamPage
			},

			// {
			//   path: '/login',
			//   ...Login
			// },

			// {
			//   path: '/Home',
			//   ...Home
			// },





			{
				...NotFoundPage
			}
		]
	}
];
