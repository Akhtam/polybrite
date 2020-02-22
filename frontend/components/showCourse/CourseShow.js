import React, { Component } from 'react';

export default class ShowCourse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: {},
			enrolledId: null
		};
		this.handleEnroll = this.handleEnroll.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		this.props
			.fetchCourse(this.props.match.params.courseId)
			.then(res => {
				this.setState({
					location: JSON.parse(res.course.location)
				});
			})
			.catch(err => console.log(err.message));
		this.props
			.fetchEnrollments()
			.then(() => this.setState({ enrolledId: this.props.enrolledId }));
	}
	handleEnroll(e) {
		e.preventDefault();
		const { course, currUserId } = this.props;
		const enrollmentForm = {
			course_id: course.id,
			student_id: currUserId
		};
		this.props.createEnrollment(enrollmentForm);
	}

	handleEdit(e) {
		e.preventDefault();
		this.props.history.push(`/courses/${this.props.course.id}/edit`);
	}

	handleDelete(e) {
		e.preventDefault();
		this.props.deleteCourse(this.props.course.id).then(res => {
			this.props.history.push(`/`);
		});
	}

	render() {
		const { currUserId } = this.props;
		const isEnrolled = this.state.enrolledId !== null ? true : false;
		console.log(this.state);
		const {
			title,
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
		const time = loctime[0].slice(0, 4) + ' ' + loctime[1];
		return (
			<div>
				<header className='show-header'>
					<img src={photoUrl} className='header-show-img' />
				</header>
				<div className='show-content'>
					{/* TOOOOOPPPP */}
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
								<span>{this.state.location.venue}</span>
							</div>
							<div className='main-info-price'>Free</div>
						</div>
					</div>
					{/* ENROLLLMENT */}
					<div className='show-button'>
						<div className='show-button-container'>
							<button
								onClick={this.handleEnroll}
								className={isEnrolled ? 'enrolled' : ''}
							>
								{isEnrolled !== true ? 'Enroll' : 'Enrolled'}
							</button>
						</div>
					</div>
					{/* DESCription */}
					<div className='main-description'>
						<div className='mm-description'>
							<div className='description'>
								<div className='desc-content'>
									<h1>About Course</h1>
									<span>{description}</span>
								</div>
							</div>
							<div className='date-loc-content'>
								<h3>Date And Time</h3>
								<div className='day-time'>
									{dayMonth.join(' ')} - {time}
								</div>
								<h3>Location</h3>
								<div className='location'>
									{this.state.location.city}
								</div>
								<div className='location'>
									{this.state.location.venue}
								</div>
							</div>
						</div>
						<hr className='show-hr' />
					</div>

					<div className='show-more-info'>
						<div className='ar-header'>
							<h1>Requirements</h1>
						</div>
						<div className='ar-content'>{requirements}</div>
						<div className='ar-header'>
							<h1>About Instructor</h1>
						</div>
						<div className='ar-content'>{aboutCreator}</div>
						<hr className='show-hr' />
					</div>
					{currUserId && currUserId === creatorId ? (
						<div className='show-button edit-delete'>
							<div className='show-button-container delete'>
								<button onClick={this.handleDelete}>
									Delete
								</button>
							</div>
							<div className='show-button-container edit'>
								<button onClick={this.handleEdit}>Edit</button>
							</div>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}
