import {
	RECEIVE_ENROLLMENTS,
	DELETE_ENROLLMENT
	
} from '../../actions/enrollment';

const enrollmentReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_ENROLLMENTS:
			return Object.assign({}, state, action.enrollments);
		default:
			return state;
	}
};

export default enrollmentReducer;
