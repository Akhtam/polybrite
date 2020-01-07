import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';

export default class SignupForm extends Component {

    render() {
        return (
            <div>
                
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
	createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);