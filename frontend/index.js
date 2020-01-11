import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store';
import { fetchCourses, createCourse, fetchCourse } from './util/courseApiUtil';

document.addEventListener('DOMContentLoaded', () => {
	window.fetchCourse = fetchCourse
	// window.createCourse = createCourse
	let store;
	if (window.currentUser) {
		const preloadedState = {
			// entities: {
			// 	users: { [window.currentUser.id]: window.currentUser }
			// },
			session: { currentUser: window.currentUser }
		};
		store = configureStore(preloadedState);
		delete window.currentUser;
	} else {
		store = configureStore();
	}
	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root);
});
