import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors/errorsReducer';
import coursesReducer from './entities/entities';

export default combineReducers({
	entities: coursesReducer,
	session: sessionReducer,
	errors: errorsReducer
});
