import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session';
import { Link } from 'react-router-dom';

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
		this.setState({
			email: '',
			password: ''
		});
	}

	handleDemoUser(e) {
		e.preventDefault();
		const { loginUser } = this.props;
		loginUser({ email: 'happy@gmail.com', password: '1234567' });
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
								type='button'
								className='button'
								onClick={this.handleSubmit}
								value='Login'
							/>
						</div>
						<div className='or'> or </div>
						<div>
							<input
								type='button'
								className='button demo-button'
								onClick={this.handleDemoUser}
								value='Demo'
							/>
						</div>
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
