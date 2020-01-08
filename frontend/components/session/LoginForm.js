import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		this.props.clearErrors()
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

	render() {
		const errs = this.props.errors.map(err => {
			return <p>{err}</p>;
		});
		return (
			<div className='login-form'>

				<form onSubmit={this.handleSubmit}>
					<label>
						Email:
						<input
							type='text'
							value={this.state.email}
							onChange={this.updateInput('email')}
						/>
					</label>
					<label>
						Password:
						<input
							type='password'
							value={this.state.password}
							onChange={this.updateInput('password')}
						/>
					</label>
					<input type='submit' value='Login' />
				</form>
				{errs}
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
