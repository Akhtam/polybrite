import { connect } from 'react-redux';
import { createCourse } from '../../actions/courses';
import CourseForm from './CourseForm';

const mstp = state => ({
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
	formTypeDown: 'Make Your Course Live'
});

const mdtp = dispatch => ({
    action: courseForm => dispatch(createCourse(courseForm))
})

export default connect(mstp, mdtp)(CourseForm)