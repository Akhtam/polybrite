import { connect } from 'react-redux';
import CourseForm from './CourseForm';
import { updateCourse, fetchCourse, clearErrors } from '../../actions/courses';

import React, { Component } from 'react';

const mstp = (state, ownProps) => {
	return {
		course: state.entities.courses[ownProps.match.params.courseId],
		formTypeTop: 'Edit',
		formTypeDown: 'Edit Your Course',
		errors: state.errors.createCourseErrors,
	};
};
const mdtp = (dispatch) => ({
	fetchCourse: (courseId) => dispatch(fetchCourse(courseId)),
	action: (course) => dispatch(updateCourse(course)),
	clearErrors: () => dispatch(clearErrors()),
});

class EditCourseContainer extends Component {
	componentDidMount() {
		this.props.fetchCourse(this.props.match.params.courseId);
	}
	render() {
		if (!this.props.course) return null;
		const {
			course,
			formTypeTop,
			formTypeDown,
			action,
			clearErrors,
			errors
		} = this.props;
		let location = JSON.parse(course.location);
		let topicId = '';
		let categoryId = 'Select Category';
		let modCourse = Object.assign(
			{},
			course,
			{ location },
			{ categoryId },
			{ topicId },
			{ courseId: course.id }
		);

		return (
			<div>
				<CourseForm
					course={modCourse}
					action={action}
					errors={errors}
					formTypeDown={formTypeDown}
					formTypeTop={formTypeTop}
					clearErrors={clearErrors}
				/>
			</div>
		);
	}
}

export default connect(mstp, mdtp)(EditCourseContainer);
