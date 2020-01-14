import { connect } from 'react-redux';
import CourseShow from './CourseShow';
import { fetchCourse } from '../../actions/courses';

const mstp = (state, ownProps) => ({
	course: state.entities.courses[ownProps.match.params.courseId]
});

const mdtp = dispatch => ({
	fetchCourse: courseId => dispatch(fetchCourse(courseId))
});

export default connect(mstp, mdtp)(CourseShow)
