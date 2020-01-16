import React, { Component } from 'react';
import { fetchCourses } from '../../actions/courses';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CourseIndexItem from './CourseIndexItem';

const CATEGORIES = ['All', 'Music', 'Tech', 'Science', 'Dance', 'Art'];

const mdtp = dispatch => ({
	fetchCourses: category => dispatch(fetchCourses(category))
});

class CourseIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: 'All',
			courses: []
		};
		this.handleCategory = this.handleCategory.bind(this);
		// this.handleRedirect = this.handleRedirect.bind(this);
	}
	componentDidMount() {
		this.props
			.fetchCourses(this.state.category)
			.then(res =>
				this.setState({ courses: Object.values(res.courses) })
			);
	}

	handleCategory(e) {
		e.preventDefault();
		const category = e.target.value;
		this.props
			.fetchCourses(category)
			.then(res =>
				this.setState({ courses: Object.values(res.courses), category })
			);
	}

	render() {
		const categories = CATEGORIES.map((category, i) => {
			return (
				<div key={i} className='category-button'>
					<button
						value={category}
						onClick={this.handleCategory}
						className={
							this.state.category === category
								? 'active-category'
								: ''
						}
					>
						{category}
					</button>
				</div>
			);
		});
		return (
			<div className='course-index'>
				<div className='category-nav'>{categories}</div>
				<div className='course-feed'>
					{this.state.courses.map(course => {
						return (
							<CourseIndexItem
								course={course}
								key={course.id}
								history={this.props.history}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default withRouter(connect(null, mdtp)(CourseIndex));
