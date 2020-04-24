import { combineReducers } from 'redux';
import sessionErrors from './sessionErrors';
import createCourseErrors from './formErrors'


export default combineReducers({
    sessionErrors,
    createCourseErrors
})