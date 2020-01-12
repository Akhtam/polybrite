import { RECEIVE_COURSES, RECEIVE_COURSE } from '../../actions/courses';

const coursesReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_COURSES:
			return action.courses;
		case RECEIVE_COURSE:
			const course = { [action.course.id]: action.course };
			return Object.assign({}, state, course);
		default:
			return state;
	}
};

export default coursesReducer;
