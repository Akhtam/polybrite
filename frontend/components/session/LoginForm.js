import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { login, clearErrors } from '../../actions/session';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemoUser = this.handleDemoUser.bind(this);
	}

	UNSAFE_componentWillMount() {
		this.props.clearErrors();
	}

	updateInput(inputType) {
		return e => {
			e.preventDefault();
			this.setState({
				[inputType]: e.target.value
			});
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		const { loginUser } = this.props;
		loginUser(this.state);
	}

	handleDemoUser(e) {
		e.preventDefault();
		const { loginUser } = this.props;
		loginUser({ email: 'demouser@gmail.com', password: '123456' });
	}

	render() {
		const errs = this.props.errors.map((err, i) => {
			return (
				<li key={i} className='error'>
					{err}
				</li>
			);
		});
		return (
			<div className='container'>
				<div className='login-box'>
					<div className='top-box'>
						<div className='login-icon'>
							<FontAwesomeIcon
								color='#DFE0DF'
								size='6x'
								icon={faAddressCard}
							/>
						</div>
						<div className='title'>
							<h2>Welcome</h2>
						</div>

						<form onSubmit={this.handleSubmit}>
							<div className='textbox'>
								<input
									placeholder='Email address'
									className='user-input'
									type='text'
									value={this.state.email}
									onChange={this.updateInput('email')}
								/>
							</div>
							<div className='textbox'>
								<input
									className='user-input'
									placeholder='Password'
									type='password'
									value={this.state.password}
									onChange={this.updateInput('password')}
								/>
							</div>
							<div>
								<input
									type='submit'
									className='form-button button'
									value='Login'
								/>
							</div>
							<div>
								<input
									type='button'
									className='demo-button button'
									onClick={this.handleDemoUser}
									value='Demo Login'
								/>
							</div>
							<div className='or'> or </div>
							<div className='redirect-session'>
								<span>Don't have Polybrite account?</span>

								<NavLink to='/signup'>Signup</NavLink>
							</div>
						</form>
						<div className={errs.length ? 'errors' : ''}>
							<ul>{errs}</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mstp = state => ({
	errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
	loginUser: formUser => dispatch(login(formUser)),
	clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp, mapDispatchToProps)(LoginForm);
