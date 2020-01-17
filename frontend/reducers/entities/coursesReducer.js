import { RECEIVE_COURSES, RECEIVE_COURSE, REMOVE_COURSE } from '../../actions/courses';

const coursesReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_COURSES:
			return action.courses;
		case RECEIVE_COURSE:
			const course = { [action.course.id]: action.course };
			return Object.assign({}, state, course);
		case REMOVE_COURSE:
			const newState = Object.assign({}, state)
			delete newState[action.courseId];
			return newState;
		default:
			return state;
	}
};

export default coursesReducer;
