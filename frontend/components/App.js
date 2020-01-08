import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import SignupForm from './session/SignupForm';
import LoginForm from './session/LoginForm';

export default class App extends Component {
	render() {
		return (
			<div>
				<Route path='/' component={Navbar} />
				<Route path='/signup' component={SignupForm} />
				<Route path='/login' component={LoginForm} />
			</div>
		);
	}
}
