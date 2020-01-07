import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {postUser} from './util/session';
import createStore from './store';

document.addEventListener('DOMContentLoaded', () => {
	window.postUser = postUser;
	const store =createStore()
	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store}/>, root);
});
