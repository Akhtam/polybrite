import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';

import { fetchCourses } from '../../actions/courses';

import CourseIndexItem from '../home/CourseIndexItem';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			courses: [],
			enrollmentOrWishlist: 'enrollments',
		};
		this.toggleCourses = this.toggleCourses.bind(this);
	}

	componentDidMount() {
		this.props
			.fetchCourses(this.props.userId, this.state.enrollmentOrWishlist)
			.then(() => this.setState({ courses: this.props.courses }));
	}
	toggleCourses(enrollmentOrWishlist) {
		this.props
			.fetchCourses(this.props.userId, enrollmentOrWishlist)
			.then(() =>
				this.setState({ courses: this.props.courses, enrollmentOrWishlist })
			);
	}
	render() {
		const active =
			this.state.enrollmentOrWishlist === 'enrollments' ? true : false;
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
				<div className='profile-ew'>
					<div
						className={`profile-h2 ${active ? 'active' : 'inactive'}`}
						onClick={() => this.toggleCourses('enrollments')}
					>
						ENROLLED COURSES
					</div>
					<div
						className={`profile-h2 ${!active ? 'active' : 'inactive'}`}
						onClick={() => this.toggleCourses('wishlists')}
					>
						WISHLISTED COURSES
					</div>
				</div>
				<hr />
				<div className='course-index'>
					<div className='course-feed'>
						{this.state.courses.map(course => {
							return (
								<CourseIndexItem
									course={course}
									key={course.id}
									history={this.props.history}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
const mdtp = dispatch => ({
	fetchCourses: (userId, enrollmentOrWishlist) =>
		dispatch(fetchCourses(userId, enrollmentOrWishlist)),
});
const mstp = state => {
	const { firstName, lastName, id } = state.session.currentUser;
	const courses = Object.values(state.entities.courses);
	return { firstName, lastName, courses, userId: id };
};

export default connect(mstp, mdtp)(Profile);
