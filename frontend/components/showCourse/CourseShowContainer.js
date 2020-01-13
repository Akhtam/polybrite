import { connect } from 'react-redux';
import CourseShow from './CourseShow';
import { fetchCourse } from '../../actions/courses';

const mstp = (state, ownProps) => ({
	course: state.entities.courses[ownProps.match.params.courseId],
	currUserId: state.session.currentUser.id
});

const mdtp = dispatch => ({
	fetchCourse: courseId => dispatch(fetchCourse(courseId))
});

export default connect(mstp, mdtp)(CourseShow)
