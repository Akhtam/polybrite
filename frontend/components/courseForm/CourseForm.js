import React, { Component } from 'react';
import { FormDetails } from './formHelper/AboutForm';

export default class CourseForm extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.course;
		this.handleChange = this.handleChange.bind(this);
		this.handleLocation = this.handleLocation.bind(this);
	}
	handleLocation(locType) {
		return e => {
			this.setState({
				location: { ...this.state.location, [locType]: e.target.value }
			});
		};
	}
	handleChange(inputType) {
		return e => {
			this.setState({
				[inputType]: e.target.value
			});
		};
	}

	render() {
		return (
			<div className='main-form-content'>
				<div className='nav-form'></div>
				<div className='border-nav-form'></div>
				<div className='form-body'>
					<div className='form-about-header'>
						<h1>About Course</h1>
					</div>
					<div className='form-about-content'>
						<FormDetails
							handleChange={this.handleChange}
							state={this.state}
							handleLocation={this.handleLocation}
						/>
					</div>

					<div className='form-details-header'>
						<h1>Course Details</h1>
					</div>
					<div className='form-details-content'>

					</div>
				</div>
			</div>
		);
	}
}
