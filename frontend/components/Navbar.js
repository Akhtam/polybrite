import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { logout } from '../actions/session';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from './Dropdown';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.handleLogout = this.handleLogout.bind(this);
		this.toggleDropDown = this.toggleDropDown.bind(this);
	}

	toggleDropDown(e) {
		this.setState({ open: !this.state.open });
	}
	handleLogout(e) {
		e.preventDefault();
		this.setState({ open: false });
		this.props.logoutUser();
		<Redirect to='/' />;
	}
	render() {
		console.log(this.props)
		return (
			<nav>
				<NavLink to='/' className='logo'>
					<h2>polybrite</h2>
				</NavLink>
				<div className='nav-links'>
					<div className='nav-li'>
						<NavLink to='/courses/new'>Create Course</NavLink>
					</div>

					<div className='nav-li'>
						{this.props.currentUser ? (
							<div onClick={this.toggleDropDown}>
								<FontAwesomeIcon
									color='grey'
									size='2x'
									icon={faUserAstronaut}
								/>
								<Dropdown
									handleLogout={this.handleLogout}
									open={this.state.open}
									user={this.props.currentUser}
								/>
							</div>
						) : (
							<NavLink to='/login'>Login</NavLink>
						)}
					</div>
				</div>
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
