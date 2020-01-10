import {fetchCourses, createCourse} from '../util/courseApiUtil';

export const RECEIVE_COURSES = 'RECEIVE_COURSES'
export const RECEIVE_COURSE = 'RECEIVE_COURSE'
export const CREATE_COURSE = 'CREATE_COURSE'

const receiveCourses = courses => ({
    type: RECEIVE_COURSES,
    courses
})

const receiveCourse = course => ({
    type: RECEIVE_COURSE,
    course
})

