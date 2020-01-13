import React, { Component } from 'react';

export default class ShowCourse extends Component {
	componentDidMount() {
		this.props.fetchCourse(this.props.match.params.courseId);
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

		console.log(this.props.currUserId, creatorId)
		return (
			<div>
				<h1>{title}</h1>
				<img  src={photoUrl}/>
			</div>
		);
	}
}
