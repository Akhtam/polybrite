import React, { Component } from 'react';

export default class ShowCourse extends Component {
	componentDidMount() {
		this.props.fetchCourse(this.props.match.params.courseId);
	}

	handleEdit(e) {
		e.preventDefault()
		this.props.history.push(`/courses/${this.props.course.id}/edit`)
	}

	render() {

		const {
			title,
			location,
			description,
			startDate,
			endDate,
			requirements,
			aboutCreator,
			size, 
			photoUrl,
			creatorId
		} = this.props.course ? this.props.course : {};
		return (
			<div>
				<h1>{title}</h1>
				<img src={photoUrl} />
				{this.props.currUserId &&
				this.props.currUserId === creatorId ? (
					<button onClick={this.handleEdit.bind(this)}>Edit</button>
				) : (
					''
				)}
			</div>
		);
	}
}
