import React, { Component } from 'react';

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
		return (
			<div className='main-form-content'>
				<div className='nav-form'></div>
				<div className='border-nav-form'></div>
				<div className='form-body'>
					<div className='form-detail-header'>
						<h1>Course Details</h1>
					</div>
					<div className='form-detail-content'>
						<label>
							Title:
							<input
								type='text'
								value={this.state.title}
								onChange={this.handleChange('title')}
							/>
						</label>
						<br />
						<label>
							City:
							<input
								type='text'
								value={this.state.location.city}
							/>
						</label>
						<br />
						<label>
							Venue:
							<input
								type='text'
								value={this.state.location.venue}
							/>
						</label>
						<br />
						<label>
							Course description:
							<input
								type='text'
								onChange={this.handleChange('description')}
								value={this.state.description}
							/>
						</label>
						<br />
					</div>
					<div className='form-category-header'></div>
					<div className='form-category-content'></div>
				</div>
			</div>
		);
	}
}
