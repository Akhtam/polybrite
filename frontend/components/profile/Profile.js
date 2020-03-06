import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../../actions/courses';

const mdtp = dispatch => ({
	fetchCourses: userId => dispatch(fetchCourses(userId))
});

class Profile extends Component {
	render() {
		return (
			<div className='profile'>
				<h2>hello from profile</h2>
			</div>
		);
	}
}

export default connect(null, mdtp)(Profile);
