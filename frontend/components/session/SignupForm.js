import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createNewUser, clearErrors } from '../../actions/session';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			first_name: '',
			last_name: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
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
		const { createNewUser } = this.props;
		createNewUser(this.state)
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
								icon={faUserPlus}
							/>
						</div>
						<form onSubmit={this.handleSubmit}>
							<div className='title'>
								<h2>Welcome</h2>
							</div>

							<div className='textbox'>
								<input
									placeholder='Email address'
									className='user-input'
									type='text'
									value={this.state.email}
									onChange={this.updateInput('email')}
								/>
							</div>
							<div className='fname-lname'>
								<div className='textbox'>
									<input
										placeholder='First Name'
										className='fname'
										type='text'
										value={this.state.first_name}
										onChange={this.updateInput(
											'first_name'
										)}
									/>
								</div>
								<div className='textbox'>
									<input
										placeholder='Last Name'
										className='lname'
										type='text'
										value={this.state.last_name}
										onChange={this.updateInput('last_name')}
									/>
								</div>
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
									value='Sign Up'
								/>
							</div>
							<div className='or'> or </div>

							<div className='redirect-session'>
								<span>Already have an account?</span>

								<NavLink to='/login'>Login</NavLink>
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
const mdtp = dispatch => ({
	createNewUser: formUser => dispatch(createNewUser(formUser)),
	clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp, mdtp)(SignupForm);
