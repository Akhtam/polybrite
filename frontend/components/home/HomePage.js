import React, { Component } from 'react';
import Header from './Header';
import CourseIndex from './CourseIndex';

class HomePage extends Component {
	render() {
		return (
			<div>
				<Header />
				<hr />
				<CourseIndex />
				<footer></footer>
			</div>
		);
	}
}

export default HomePage;
