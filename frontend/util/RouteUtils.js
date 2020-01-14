import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mstp = state => ({
	loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, path, component: Component }) => {
	return (
		<Route
			path={path}
			render={props =>
				loggedIn ? <Redirect to='/' /> : <Component {...props} />
			}
		/>
	);
};

const Protected = ({ loggedIn, path, component: Component }) => {

	console.log(path)
	return (
		<Route
			path={path}
			render={props =>
				!loggedIn ? <Redirect to='/login' /> : <Component {...props} />
			}
		/>
	);
};

export const AuthRoute = withRouter(connect(mstp)(Auth));
export const ProtectedRoute = withRouter(connect(mstp)(Protected));
