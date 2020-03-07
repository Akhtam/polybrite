import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';

import { fetchCourses } from '../../actions/courses';

class Profile extends Component {
	render() {
		console.log(this.props)
		return (
			<div className='profile'>
				<div className='profile-header'>
					<FontAwesomeIcon icon={faUserNinja} />
					<h2>
						{this.props.firstName}
						{this.props.lastName}
					</h2>
				</div>
			</div>
		);
	}
}
const mdtp = dispatch => ({
	fetchCourses: userId => dispatch(fetchCourses(userId))
});
const mstp = state => {
	const { firstName, lastName } = state.session.currentUser;
	console.log(state)
	return { firstName, lastName };
};

export default connect(mstp, mdtp)(Profile);
