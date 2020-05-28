import { connect } from 'react-redux';
import CourseShow from './CourseShow';
import { fetchCourse, deleteCourse } from '../../actions/courses';
import {
	createEnrollment,
	fetchEnrollments,
	removeEnrollment,
} from '../../actions/enrollment';
import {
	fetchWishlists,
	createWishlist,
	removeWishlist,
} from '../../actions/wishlist';
const mstp = (state, ownProps) => {
	const currUserId = state.session.currentUser
		? state.session.currentUser.id
		: null;
	let enrolledId = null;
	let wishlistId = null;
	Object.entries(state.entities.enrollments).forEach(([k, v]) => {
		if (v.courseId === +ownProps.match.params.courseId) {
			enrolledId = k;
		}
	});
	Object.entries(state.entities.wishlists).forEach(([k, v]) => {
		if (v.courseId === +ownProps.match.params.courseId) {
			wishlistId = k;
		}
	});
	return {
		course: state.entities.courses[ownProps.match.params.courseId],
		enrolledId,
		currUserId,
		wishlistId,
	};
};

const mdtp = dispatch => ({
	fetchCourse: courseId => dispatch(fetchCourse(courseId)),
	deleteCourse: courseId => dispatch(deleteCourse(courseId)),
	fetchEnrollments: () => dispatch(fetchEnrollments()),
	createEnrollment: form => dispatch(createEnrollment(form)),
	removeEnrollment: enrollmentId => dispatch(removeEnrollment(enrollmentId)),
	fetchWishlists: () => dispatch(fetchWishlists()),
	createWishlist: form => dispatch(createWishlist(form)),
	removeWishlist: wishlistId => dispatch(removeWishlist(wishlistId)),
});

export default connect(mstp, mdtp)(CourseShow);
