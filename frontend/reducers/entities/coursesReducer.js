import { RECEIVE_COURSES, RECEIVE_COURSE } from '../../actions/courses';

const coursesReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_COURSES:
			return action.courses;
		case RECEIVE_COURSE:
			return Object.assign({}, state, {
				[action.course.id]: action.course
			});
		default:
			return state;
	}
};

export default coursesReducer;
