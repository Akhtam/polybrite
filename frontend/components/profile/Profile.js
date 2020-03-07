import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';

import { fetchCourses } from '../../actions/courses';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			enrolledCourses: []
		};
	}

	componentDidMount() {
		this.props.fetchCourses(this.props.userId);
	}
	render() {
		console.log(this.props);
		return (
			<div className='profile'>
				<div className='profile-header'>
					<div className='profile-header-content'>
						<div className='header-icon'>
							<FontAwesomeIcon icon={faUserNinja} size='4x' />
						</div>
						<h2>
							{this.props.firstName} {this.props.lastName}
						</h2>
					</div>
				</div>
			</div>
		);
	}
}
const mdtp = dispatch => ({
	fetchCourses: userId => dispatch(fetchCourses(userId))
});
const mstp = state => {
	const { firstName, lastName, id } = state.session.currentUser;
	const enrolledCourses = Object.values(state.entities.courses);
	return { firstName, lastName, enrolledCourses, userId: id };
};

export default connect(mstp, mdtp)(Profile);
