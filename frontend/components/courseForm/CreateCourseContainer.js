import { connect } from 'react-redux';
import { createCourse, clearErrors } from '../../actions/courses';
import CourseForm from './CourseForm';

const mstp = state => {
	return {
	course: {
		title: '',
		description: '',
		location: {
			city: '',
			venue: ''
		},
		requirements: '',
		photoFile: '',
		startDate: '',
		startTime: '',
		endDate: '',
		endTime: '',
		size: 1,
		aboutCreator: '',
		categoryId: 'Select Category',
		topicId: ''
	},
	formTypeTop: 'Enlighten',
	formTypeDown: 'Make Your Course Live',
	errors: state.errors.createCourseErrors

	
}};

const mdtp = dispatch => ({
	action: courseForm => dispatch(createCourse(courseForm)),
	clearErrors: () => dispatch(clearErrors())
})

export default connect(mstp, mdtp)(CourseForm)