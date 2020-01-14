import { connect } from 'react-redux';
import CourseShow from './CourseShow';
import { fetchCourse } from '../../actions/courses';

const mstp = (state, ownProps) => {
	const currUserId = state.session.currentUser
		? state.session.currentUser.id
		: null;
	return {
		course: state.entities.courses[ownProps.match.params.courseId],
		currUserId
	};
};

const mdtp = dispatch => ({
	fetchCourse: courseId => dispatch(fetchCourse(courseId))
});

export default connect(mstp, mdtp)(CourseShow);
