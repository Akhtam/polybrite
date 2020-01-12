import React, { Component } from 'react';

export default class ShowCourse extends Component {
	componentDidMount() {
		this.props.fetchCourse(this.props.match.params.courseId);
	}

	render() {
		const course = this.props.course
			? Object.values(this.props.course)
			: [];

		return (
			<div>
				<ul>
					{course.map((el, i) => (
						<li key={i}>{el}</li>
					))}
				</ul>
			</div>
		);
	}
}
