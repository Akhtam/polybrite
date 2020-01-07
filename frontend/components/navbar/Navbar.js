import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav>
				<h2>Polybrite</h2>
				<ul className='nav-links'>
					<li> <Link  to="/signup">Create Event</Link> </li>
					<li>Signup</li>
					<li>Login</li>
				</ul>
			</nav>
		);
	}
}
