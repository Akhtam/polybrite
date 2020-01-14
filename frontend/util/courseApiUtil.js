import { $CombinedState } from 'redux';

const axios = require('axios');

export const fetchCourses = () => {
	return axios.get('/api/courses');
};

export const createCourse = course => {
	return $.ajax({
		url: '/api/courses',
		method: 'POST',
		data: course,
		contentType: false,
		processData: false
	});
};
export const updateCourse = course => {
	return $.ajax({
		url: `/api/courses/${course.id}`,
		method: 'PATCH',
		data: course,
		contentType: false,
		processData: false
	});
};

export const fetchCourse = courseId => {
	return axios.get(`/api/courses/${courseId}`);
};
