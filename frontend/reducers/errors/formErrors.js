import {RECEIVE_FORM_ERRORS, CLEAR_ERRORS} from '../../actions/courses';

export default (state=[], action) => {
    switch (action.type) {
        case RECEIVE_FORM_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

