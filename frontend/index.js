import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {postUser} from './util/session';


document.addEventListener('DOMContentLoaded', () => {
	window.postUser = postUser;
	const root = document.getElementById('root');
	ReactDOM.render(<Root />, root);
});
