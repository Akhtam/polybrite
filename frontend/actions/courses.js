import * as courseApiUtil from '../util/courseApiUtil';

export const RECEIVE_COURSES = 'RECEIVE_COURSES';
export const RECEIVE_COURSE = 'RECEIVE_COURSE';

const receiveCourses = courses => ({
	type: RECEIVE_COURSES,
	courses
});

const receiveCourse = course => ({
	type: RECEIVE_COURSE,
	course
});

export const fetchCourses = () => dispatch => {
	return courseApiUtil
		.fetchCourses()
		.then(res => dispatch(receiveCourses(res.data)));
};
export const fetchCourse = courseId => dispatch => {
	return courseApiUtil
		.fetchCourse(courseId)
		.then(res => dispatch(receiveCourse(res.data.course)));
};

export const createCourse = formCourse => dispatch => {
	return courseApiUtil
		.createCourse(formCourse)
		.then(res => dispatch(receiveCourse(res.course)));
};

export const updateCourse = course => dispatch => {
	return courseApiUtil
		.updateCourse(course)
		.then(res => dispatch(receiveCourse(res.course)));
};
