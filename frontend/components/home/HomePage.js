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
		return (
			<div>
				<Header />
			</div>
		);
	}
}

export default connect(null, mdtp)(HomePage)
