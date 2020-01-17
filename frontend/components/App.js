import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Navbar from './Navbar';
import SignupForm from './session/SignupForm';
import LoginForm from './session/LoginForm';
import CreateCourseContainer from './courseForm/CreateCourseContainer';
import EditCourseContainer from './courseForm/EditCourseContainer';
import { AuthRoute, ProtectedRoute } from '../util/RouteUtils';
import HomePage from './home/HomePage';
import CourseShowContainer from './showCourse/CourseShowContainer';

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar />

				<Switch>
					<ProtectedRoute
						path='/courses/new'
						component={CreateCourseContainer}
					/>
					<AuthRoute path='/signup' component={SignupForm} />
					<AuthRoute path='/login' component={LoginForm} />
					<Route path='/' exact component={HomePage} />
					<Route
						exact
						path='/courses/:courseId/edit'
						component={EditCourseContainer}
					/>
					<Route
						exact
						path='/courses/:courseId'
						component={CourseShowContainer}
					/>
				</Switch>
				<footer className='footer' />
			</div>
		);
	}
}
