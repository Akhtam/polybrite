export const enrollToCourse = enrollment => {
	return $.ajax({
		method: 'POST',
		url: '/api/enrollments',
		data: {enrollment}
	});
};

export const fetchEnrollments = () => {
	return $.ajax({
		method: 'GET',
		url: '/api/enrollments'
	})
}