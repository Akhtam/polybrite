import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';

import { fetchCourses } from '../../actions/courses';

class Profile extends Component {
	render() {
		return (
			<div className='profile'>
				<div className='profile-header'>
					<FontAwesomeIcon icon={faUserNinja} />
					<h2></h2>
				</div>
				<h2>hello from profile</h2>
			</div>
		);
	}
}
const mdtp = dispatch => ({
	fetchCourses: userId => dispatch(fetchCourses(userId))
});
const mstp = state => {
	const { firstName, lastName } = state.session;
	return { firstName, lastName };
};

export default connect(null, mdtp)(Profile);
