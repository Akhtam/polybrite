import { postUser, postSession, deleteSession } from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
//sync

const receiceCurrentUser = user => ({
	type: RECEIVE_CURRENT_USER,
	user
});

const logoutCurrentUser = () => ({
	type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
	type: RECEIVE_SESSION_ERRORS,
	errors
});

export const clearErrors = () => ({
	type: CLEAR_ERRORS
})

//async

export const createNewUser = formUser => dispatch => {
	return postUser(formUser)
		.then(user => dispatch(receiceCurrentUser(user.data)))
		.catch(({response}) => dispatch(receiveErrors(response.data)));
};

export const login = formUser => dispatch => {
	return postSession(formUser)
		.then(user => dispatch(receiceCurrentUser(user.data)))
		.catch(({ response }) => dispatch(receiveErrors(response.data)));
};

export const logout = () => dispatch => {
	return deleteSession().then(() => dispatch(logoutCurrentUser()));
};
