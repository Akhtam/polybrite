import {RECEIVE_FORM_ERRORS} from '../../actions/courses';

export default (state=[], action) => {
    switch (action.type) {
        case RECEIVE_FORM_ERRORS:
            
            return action.errors;
    
        default:
            return state;
    }
}

