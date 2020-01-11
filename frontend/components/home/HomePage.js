import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../../actions/courses';
import Header from './Header';

const mdtp = dispatch => ({
	fetchCourses: () => dispatch(fetchCourses())
});

class HomePage extends Component {
	componentDidMount() {
		this.props.fetchCourses()
	}
	render() {
<<<<<<< HEAD
		return <div>Hello from home page</div>;
=======
		return (
			<div>
				<Header />
			</div>
		);
>>>>>>> homepage
	}
}

export default connect(null, mdtp)(HomePage)
