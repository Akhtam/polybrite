<<<<<<< HEAD

=======
>>>>>>> dev

const axios = require('axios');

export const fetchCourses = (category) => {
<<<<<<< HEAD
	return axios.get('/api/courses', {
		data: {category}
=======
	return $.ajax({
		url: `/api/courses?category=${category}`,
		method: 'GET'
>>>>>>> dev
	});
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
		url: `/api/courses/${course.get('course[course_id]')}`,
		method: 'PATCH',
		data: course,
		contentType: false,
		processData: false
	});
};

export const fetchCourse = courseId => {
	return axios.get(`/api/courses/${courseId}`);
};
