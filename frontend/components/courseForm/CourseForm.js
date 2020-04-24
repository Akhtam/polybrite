import React, { Component } from 'react';
import AboutForm from './formHelper/AboutForm';
import { DetailsForm } from './formHelper/DetailsForm';
import { withRouter } from 'react-router-dom';

class CourseForm extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.course;
		this.handleChange = this.handleChange.bind(this);
		this.handleLocation = this.handleLocation.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFile = this.handleFile.bind(this);
	}
	UNSAFE_componentWillMount() {
		this.props.clearErrors();
	}

	handleLocation(locType) {
		return (e) => {
			this.setState({
				location: { ...this.state.location, [locType]: e.target.value },
			});
		};
	}
	handleChange(inputType) {
		return (e) => {
			this.setState({
				[inputType]: e.target.value,
			});
		};
	}

	handleFile(e) {
		e.preventDefault();
		this.setState({
			photoFile: e.target.files[0],
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		let loc = {
			location: JSON.stringify(this.state.location),
		};
		const startDate = new Date(
			`${this.state.startDate} ${this.state.startTime}`
		);
		const endDate = new Date(`${this.state.endDate} ${this.state.endTime}`);
		const formData = new FormData();
		formData.append('course[title]', this.state.title);
		formData.append('course[description]', this.state.description);
		formData.append('course[location]', loc.location);
		formData.append('course[requirements]', this.state.requirements);
		formData.append('course[photo]', this.state.photoFile);
		formData.append('course[start_date]', startDate);
		formData.append('course[end_date]', endDate);
		formData.append('course[size]', this.state.size);
		formData.append('course[about_creator]', this.state.aboutCreator);
		formData.append('course[category_id]', this.state.categoryId);
		formData.append('course[topic_id]', this.state.topicId);
		if (this.state.courseId) {
			formData.append('course[course_id]', this.state.courseId);
		}
		this.props.action(formData).then((res) => {
			this.props.history.push(`/courses/${res.course.id}`);
		});
	}

	render() {
		const isCreate =
			this.props.formTypeTop !== 'Enlighten'
				? 'Edit your Course'
				: 'Create a Course';
		const { errors } = this.props;
		return (
			<div className='main-form-content'>
				<div className='nav-form'>
					<h2>{isCreate}</h2>
					<button
						onClick={this.handleSubmit}
						className='form-header-button'
					>
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
						<div className='form-inner-body'>
							<AboutForm
								state={this.state}
								handleChange={this.handleChange}
								handleFile={this.handleFile}
								handleLocation={this.handleLocation}
							/>
						</div>
						<div className='form-about-header'>
							<span>2</span>
							<h2>Course Details</h2>
						</div>
						<div className='form-inner-body'>
							<DetailsForm
								handleChange={this.handleChange}
								state={this.state}
							/>
						</div>
					</div>
				</div>

				<div className='footer-form'>
					<div className='inner-footer-form'>
						<h2>You're almost done.</h2>
						<button
							onClick={this.handleSubmit}
							className='form-footer-button'
						>
							{this.props.formTypeDown}
						</button>
					</div>
					{errors.length ? (
						<div className='errors'>
							<span className='required'>
								Please fill out all the required fields!
							</span>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}

export default withRouter(CourseForm);
