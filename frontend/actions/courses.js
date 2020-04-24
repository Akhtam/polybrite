import * as courseApiUtil from '../util/courseApiUtil';

export const RECEIVE_COURSES = 'RECEIVE_COURSES';
export const RECEIVE_COURSE = 'RECEIVE_COURSE';
export const REMOVE_COURSE = 'REMOVE_COURSE';
export const RECEIVE_FORM_ERRORS = 'RECEIVE_FORM_ERRORS';

const receiveCourses = courses => ({
	type: RECEIVE_COURSES,
	courses
});

const receiveCourse = course => ({
	type: RECEIVE_COURSE,
	course
});

const removeCourse = courseId => ({
	type: REMOVE_COURSE,
	courseId
});

const receiveFormErrors = errors => ({
	type: RECEIVE_FORM_ERRORS,
	errors
})


export const fetchCourses = category => dispatch => {
	return courseApiUtil
		.fetchCourses(category)
		.then(res => dispatch(receiveCourses(res)));
};
export const fetchCourse = courseId => dispatch => {
	return courseApiUtil
		.fetchCourse(courseId)
		.then(res => dispatch(receiveCourse(res.data.course)));
};

export const createCourse = formCourse => dispatch => {
	return courseApiUtil
		.createCourse(formCourse)
		.then(res => dispatch(receiveCourse(res.course)))
		.fail(err => dispatch(receiveFormErrors(err.statusText)))
};

export const updateCourse = course => dispatch => {
	return courseApiUtil
		.updateCourse(course)
		.then(res => dispatch(receiveCourse(res.course)));
};

export const deleteCourse = courseId => dispatch => {
	return courseApiUtil
		.deleteCourse(courseId)
		.then(() => dispatch(removeCourse(courseId)));
};
