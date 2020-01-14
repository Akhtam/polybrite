import React, { Component } from 'react';
import AboutForm  from './formHelper/AboutForm';
import { DetailsForm } from './formHelper/DetailsForm';
import { Redirect } from 'react-router-dom';

export default class CourseForm extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.course;
		this.handleChange = this.handleChange.bind(this);
		this.handleLocation = this.handleLocation.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFile = this.handleFile.bind(this);
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

	handleFile(e) {
		e.preventDefault();
		this.setState({
			photoFile: e.target.files[0]
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		let loc = {
			location: JSON.stringify(this.state.location)
		};
		const formData = new FormData();
		formData.append('course[title]', this.state.title);
		formData.append('course[description]', this.state.description);
		formData.append('course[location]', loc.location);
		formData.append('course[requirements]', this.state.requirements);
		formData.append('course[photo]', this.state.photoFile);
		formData.append('course[startDate]', this.state.startDate);
		formData.append('course[endDate]', this.state.endDate);
		formData.append('course[size]', this.state.size);
		formData.append('course[aboutCreator]', this.state.aboutCreator);
		formData.append('course[categoryId]', this.state.categoryId);
		formData.append('course[topicId]', this.state.topicId);

		this.props
			.action(formData)
			.then(res => this.props.history.push(`${res.course.id}`));
	}

	render() {
		const isCreate =
			this.props.formTypeTop !== 'Enlighten'
				? 'Edit your Course'
				: 'Create a Course';
		return (
			<div className='main-form-content'>
				<div className='nav-form'>
					<h2>{isCreate}</h2>
					<button className='form-header-button'>
						{this.props.formTypeTop}
					</button>
				</div>
				<div className='border-nav-form'></div>
				<div className='form-body-back'>
					<div className='form-body'>
						<div className='form-about-header'>
							<span>1</span>
							<h2>About Course</h2>
						</div>
						<AboutForm
							state={this.state}
							handleChange={this.handleChange}
							handleFile={this.handleFile}
							handleLocation={this.handleLocation}
						/>

						<div className='form-about-header'>
							<span>2</span>
							<h2>Course Details</h2>
						</div>
						<DetailsForm
							handleChange={this.handleChange}
							state={this.state}
						/>
					</div>
				</div>
				<button onClick={this.handleSubmit}>
					{this.props.formTypeDown}
				</button>
			</div>
		);
	}
}
