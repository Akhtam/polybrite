const axios = require('axios');

export const fetchCourses = () => {
	return axios.get('/api/courses');
};

export const createCourse = course => {
	return axios.post('/api/courses', { course });
};

export const fetchCourse = courseId => {
    return axios.get(`/api/courses/${courseId}`);
}