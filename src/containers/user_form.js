import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {addUser} from '../actions';

class UserForm extends React.Component{
    renderField(field){
        return(
            <span>

                <input
                    {...field.input}
                    placeholder={field.placeholder}
                />
                <span className="error">{field.meta.touched ? field.meta.error : ''}</span>
            </span>
        )
    }
    onSubmit(values){
        this.props.addUser(values);
        //console.log(values);
    }

    render(){
        const handleSubmit = this.props.handleSubmit;
        const submitting = this.props.submitting;
        const pristine = this.props.pristine;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="name"
                    type="text"
                    placeholder="Full name"
                    component={this.renderField}
                />
                <Field
                    name="email"
                    type="email"
                    placeholder="E-mail address"
                    component={this.renderField}
                />
                <Field
                    name="phone"
                    type="number"
                    placeholder="Phone number"
                    component={this.renderField}
                />
                <button type="submit" disabled={submitting || pristine}>Add New</button>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if(!values.name){
        errors.name = "Required";
    }
    if(!values.email){
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if(!values.phone){
        errors.phone = "Required";
    } else if(!/^[0-9]{2}[0-9]{8}$/i.test(values.phone)){
        errors.phone = 'Invalid phone number'
    }


    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostNewUser'
})(
    connect(null, {addUser})(UserForm)
    );