import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../actions/session';
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
		// console.log(this.props)
		// const errors = 
		return (
			<nav>
				<h2>
					<Link to='/'>Polybrite</Link>{' '}
				</h2>
				<ul className='nav-links'>
					<li>
						{' '}
						{!this.props.currentUser ? (
							<Link to='/signup'>Signup</Link>
						) : (
							this.props.currentUser.firstName
						)}
					</li>
					<li>
						{this.props.currentUser ? (
							<span onClick={this.handleLogout}>logout</span>
						) : (
							<Link to='/login'>Login</Link>
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
