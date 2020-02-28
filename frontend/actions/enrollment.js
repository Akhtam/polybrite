import * as enrollmentApiUtil from '../util/enrollmentApiUtil';

export const RECEIVE_ENROLLMENTS = 'RECEIVE_ENROLLMENTS';
export const DELETE_ENROLLMENT = 'DELETE_ENROLLMENT';

const receiveEnrollments = enrollments => {
	return { type: RECEIVE_ENROLLMENTS, enrollments };
};

const deleteEnrollment = enrollmentId => ({
	type: DELETE_ENROLLMENT,
	enrollmentId
});

export const fetchEnrollments = () => dispatch => {
	return enrollmentApiUtil.fetchEnrollments().then(res => {
		return dispatch(receiveEnrollments(res));
	});
};

export const createEnrollment = formEnrollment => dispatch => {
	return enrollmentApiUtil.enrollToCourse(formEnrollment).then(res => {
		return dispatch(receiveEnrollments(res));
	});
};

export const removeEnrollment = (enrollmentId = dispatch => {
	return enrollmentApiUtil
		.deleteEnrollment(enrollmentId)
		.then(() => dispatch(receiveEnrollments));
});
