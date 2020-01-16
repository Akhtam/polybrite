import React, { Component } from 'react';

export default class ShowCourse extends Component {
	componentDidMount() {
		this.props.fetchCourse(this.props.match.params.courseId);
	}

	handleEdit(e) {
		e.preventDefault();
		this.props.history.push(`/courses/${this.props.course.id}/edit`);
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
		const dayMonth = new Date(startDate)
			.toDateString()
			.split(' ')
			.slice(0, 3);
		const loctime = new Date(startDate).toLocaleTimeString().split(' ');
		const time = loctime[0].slice(0, 4) + loctime[1];
		console.log(dayMonth);

		return (
			<div>
				<header className='show-header'>
					<img src={photoUrl} className='header-show-img' />
				</header>
				<div className='show-content'>
					<div className='show-top-content'>
						<img src={photoUrl} className='main-show-img' />
						<div className='show-main-info'>
							<div className='main-info-date'>
								<time className='info-date'>
									<p>{dayMonth[1]}</p>
									<p>{dayMonth[2]}</p>
								</time>
							</div>
							<div className='main-info-title'>
								<h1>{title}</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
