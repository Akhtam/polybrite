import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer';
import enrollmentReducer from './enrollmentsReducer';
import wishlistReducer from './wishlistReducer'
export default combineReducers({
	courses: coursesReducer,
	enrollments: enrollmentReducer,
	wishlists: wishlistReducer,
});
