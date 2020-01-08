import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewUser, clearErrors } from '../../actions/session';

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

	componentWillMount() {
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
		createNewUser(this.state);
		this.setState({
			email: '',
			first_name: '',
			last_name: '',
			password: ''
		});
		
	}

	render() {
		const errs = this.props.errors.map(err => {
			return <p>{err}</p>;
		});
		return (
			<div className='signup-form'>
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
						First Name:
						<input
							type='text'
							value={this.state.firstName}
							onChange={this.updateInput('first_name')}
						/>
					</label>
					<label>
						Last Name:
						<input
							type='text'
							value={this.state.lastName}
							onChange={this.updateInput('last_name')}
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
					<input type='submit' value='Signup' />
				</form>
				{errs}
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
