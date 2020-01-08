import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import SignupForm from './session/SignupForm';
import LoginForm from './session/LoginForm';
import { AuthRoute, ProtectedRoute } from '../util/RouteUtils';
import { HomePage } from './home/HomePage';

export default class App extends Component {
	render() {
		return (
			<div>
				<header>
					<Navbar />
				</header>
				<Switch>
					<AuthRoute path='/signup' component={SignupForm} />
					<AuthRoute path='/login' component={LoginForm} />
					<Route path='/' exact component={HomePage} />
				</Switch>
			</div>
		);
	}
}
