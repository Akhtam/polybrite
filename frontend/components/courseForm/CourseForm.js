import React, { Component } from 'react';
import { FormDetails } from './formHelper/FormDetails';

export default class CourseForm extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.course;
	}

	handleChange(inputType) {
		return e => {
			this.setState({
				[inputType]: e.target.value
			});
		};
	}

	render() {
		// console.log(typeof JSON.stringify(this.state.location));
		console.log(this.st);
		return (
			<div className='main-form-content'>
				<div className='nav-form'></div>
				<div className='border-nav-form'></div>
				<div className='form-body'>
					<div className='form-detail-header'>
						<h1>Course Details</h1>
					</div>
                     <FormDetails handleChange={this.handleChange} state={this.state}/>
					<div className='form-category-header'></div>
					<div className='form-category-content'></div>
				</div>
			</div>
		);
	}
}
