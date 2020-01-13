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
		startDate: 'Sat, 04 Jan 2020 05:30:00 +0000',
		endDate: 'Sat, 10 Jan 2020 05:30:00 +0000',
		size: 1,
		aboutCreator: '',
		categoryId: 'Select Category',
		topicId: ''
	},
	formType: 'Publish'
});

const mdtp = dispatch => ({
    action: courseForm => dispatch(createCourse(courseForm))
})

export default connect(mstp, mdtp)(CourseForm)