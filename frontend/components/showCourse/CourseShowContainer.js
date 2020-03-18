import { connect } from 'react-redux';
import CourseShow from './CourseShow';
import { fetchCourse, deleteCourse } from '../../actions/courses';
import {
	createEnrollment,
	fetchEnrollments,
	removeEnrollment
} from '../../actions/enrollment';

const mstp = (state, ownProps) => {
	const currUserId = state.session.currentUser
		? state.session.currentUser.id
		: null;
	let enrolledId = null;
	Object.entries(state.entities.enrollments).forEach(([k, v]) => {
		if (v.courseId === +ownProps.match.params.courseId) {
			enrolledId = k;
		}
	});
	return {
		course: state.entities.courses[ownProps.match.params.courseId],
		enrolledId,
		currUserId
	};
};

const mdtp = dispatch => ({
	fetchCourse: courseId => dispatch(fetchCourse(courseId)),
	deleteCourse: courseId => dispatch(deleteCourse(courseId)),
	fetchEnrollments: () => dispatch(fetchEnrollments()),
	createEnrollment: form => dispatch(createEnrollment(form)),
	removeEnrollment: enrollmentId => dispatch(removeEnrollment(enrollmentId))
});

export default connect(mstp, mdtp)(CourseShow);
