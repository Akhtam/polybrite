import React, { Component } from 'react';
import { FormDetails } from './formHelper/AboutForm';
import { DetailsForm } from './formHelper/DetailsForm';
import { Redirect } from 'react-router-dom';

export default class CourseForm extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.course;
		this.handleChange = this.handleChange.bind(this);
		this.handleLocation = this.handleLocation.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

	handleSubmit(e) {
		e.preventDefault();
		let loc = {
			location: JSON.stringify(this.state.location)
		};
		let finalForm = Object.assign(this.state, loc);
		console.log(finalForm);
		this.props.action(finalForm).then(res => console.log(res));
		// this
		alert('succes');
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
					<FormDetails
						handleChange={this.handleChange}
						state={this.state}
						handleLocation={this.handleLocation}
					/>

					<div className='form-details-header'>
						<h1>Course Details</h1>
					</div>
					<div className='form-details-content'>
						<DetailsForm
							handleChange={this.handleChange}
							state={this.state}
						/>
					</div>
				</div>
				<button onClick={this.handleSubmit}>Publish</button>
			</div>
		);
	}
}
