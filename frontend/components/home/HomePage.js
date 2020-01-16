import React, { Component } from 'react';
import Header from './Header';
import CourseIndex from './CourseIndex';

class HomePage extends Component {
<<<<<<< HEAD
	componentDidMount() {
		this.props.fetchCourses();
	}
=======
>>>>>>> dev
	render() {
		return (
			<div>
				<Header />
<<<<<<< HEAD
				<div className='home-page-content'>
					
				</div>
=======
				<hr />
				<CourseIndex />
>>>>>>> dev
			</div>
		);
	}
}

<<<<<<< HEAD
export default connect(null, mdtp)(HomePage);
=======
export default HomePage;
>>>>>>> dev
