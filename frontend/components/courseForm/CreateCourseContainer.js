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
        startDate: '',
        endDate: '',
        size: 0,
        aboutCreator: '', 
    },
    formType: 'Publish'
});

const mdtp = dispatch => ({
    action: courseForm => dispatch(createCourse(courseForm))
})

export default connect(mstp, mdtp)(CourseForm)