import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/Navbar'

export default class App extends Component {
	render() {
		return (
			<div>
                <Route path='/' component={Navbar} />
			</div>
		);
	}
}
