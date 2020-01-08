import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { logout } from '../actions/session';
import { connect } from 'react-redux';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout(e) {
		e.preventDefault();
		this.props.logoutUser();
		<Redirect to='/' />;
	}
	render() {
		return (
			<nav>
				<h2>
					<NavLink to='/'>Polybrite</NavLink>{' '}
				</h2>
				<ul className='nav-links'>
					<li>
						{' '}
						{!this.props.currentUser ? (
							<NavLink to='/signup'>Signup</NavLink>
						) : (
							this.props.currentUser.firstName
						)}
					</li>
					<li>
						{this.props.currentUser ? (
							<span onClick={this.handleLogout}>logout</span>
						) : (
							<NavLink to='/login'>Login</NavLink>
						)}
					</li>
				</ul>
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	logoutUser: () => dispatch(logout())
});

// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
