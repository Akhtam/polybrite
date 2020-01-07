const axios = require('axios');

export const postUser = user => {
	return axios
		.post('/api/users', {
			user
		})
		.then(response => console.log(response));
};
