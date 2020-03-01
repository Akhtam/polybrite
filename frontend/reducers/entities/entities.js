import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer';
import enrollmentReducer from './enrollmentsReducer';
export default combineReducers({
	courses: coursesReducer,
	enrollments: enrollmentReducer
});
