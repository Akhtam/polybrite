const axios = require('axios');

export const postUser = user => {
	return axios.post('/api/users', {
		user
	});
};

export const postSession = user => {
	return axios.post('/api/session', {
		user
	});
};

export const deleteSession = () => {
	return axios.delete('/api/session');
};
