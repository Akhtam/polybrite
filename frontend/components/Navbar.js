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
				<NavLink to='/' className='logo'>
					<h2>polybrite</h2>
				</NavLink>
				<ul className='nav-links'>
					<div className='nav-li'>
						<li>
							<NavLink to='/courses/new'>Create Course</NavLink>
						</li>
					</div>
					<div className='nav-li'>
						<li>
							{' '}
							{!this.props.currentUser ? (
								<NavLink to='/signup'>Signup</NavLink>
							) : (
								<span
									className='logout-button'
									onClick={this.handleLogout}
								>
									logout
								</span>
							)}
						</li>
					</div>
					<div className='nav-li'>
						<li>
							{this.props.currentUser ? (
								<span>{this.props.currentUser.firstName}</span>
							) : (
								<NavLink to='/login'>Login</NavLink>
							)}
						</li>
					</div>
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
