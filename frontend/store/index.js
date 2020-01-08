import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/';
import thunk from 'redux-thunk';

const configureStore=  (preloadedState = {}) => {

	return createStore(
		rootReducer,
		preloadedState,
		composeWithDevTools(applyMiddleware(thunk))
	);
};

export default configureStore