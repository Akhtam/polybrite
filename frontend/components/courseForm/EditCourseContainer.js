import { connect } from 'react-redux';
import CourseForm from './CourseForm';
import { updateCourse, fetchCourse } from '../../actions/courses';

import React, { Component } from 'react';


const mstp = (state, ownProps) => {
	return {
		course: state.entities.courses[ownProps.match.params.courseId],
		formTypeTop: 'Edit',
		formTypeDown: 'Edit Your Course'
	};
};
const mdtp = dispatch => ({
	fetchCourse: courseId => dispatch(fetchCourse(courseId)),
	action: course => dispatch(updateCourse(course))
});

class EditCourseContainer extends Component {
	componentDidMount() {
		this.props.fetchCourse(this.props.match.params.courseId);
	}
	render() {
		console.log(this.props);
        
        if (!this.props.course) return null;
		const { course, formTypeTop, formTypeDown, action } = this.props;
		let location = JSON.parse(course.location);
		let topicId = '';
		let categoryId = 'Select Category';
		let modCourse = Object.assign(
            {},
			course,
			{ location },
			{ categoryId },
			{ topicId }
            );
		console.log(this.props);

		return (
			<div>
				<CourseForm
					course={modCourse}
					action={action}
					formTypeDown={formTypeDown}
					formTypeTop={formTypeTop}
				/>
			</div>
		);
	}
}



export default connect(mstp, mdtp)(EditCourseContainer);
