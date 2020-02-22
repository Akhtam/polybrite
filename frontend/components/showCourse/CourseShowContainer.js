import { connect } from 'react-redux';
import CourseShow from './CourseShow';
import { fetchCourse, deleteCourse } from '../../actions/courses';
import { createEnrollment, fetchEnrollments } from '../../actions/enrollment';

const mstp = (state, ownProps) => {
	const currUserId = state.session.currentUser
		? state.session.currentUser.id
		: null;
	let enrolledId = null;
	Object.entries(state.entities.enrollmets).forEach(([k, v]) => {
		console.log(v);
		if (v.courseId === +ownProps.match.params.courseId) {
			enrolledId = k;
		}
	});
	console.log(enrolledId);

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
	createEnrollment: form => dispatch(createEnrollment(form))
});

export default connect(mstp, mdtp)(CourseShow);
