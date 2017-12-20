import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";

class NewBibleMemoryForm extends Component {
	renderField(field) {
		const {
			input,
			label,
			type,
			placeholder,
			meta: { touched, error }
		} = field;

		return (
			<div>
				<label>{label}</label>
				<div>
					<input {...input} placeholder={placeholder} type={type} />
					<div className="red-text"sds_absolute-centered>
						{touched && error}
					</div>
				</div>
			</div>
		);
	}

  onSubmit(values) {
    const {createGoal, reset} = this.props;

    createGoal(values, 'bibleMemory');
    reset();
  }

	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h5 className="formTitle">New Memory Verse</h5>
				<Field
					name="verse"
					type="text"
          label="Verse"
          placeholder="Genesis 1:1"
					component={this.renderField}
					validate={required}
				/>
				<div className="form-buttons">
					<button type="submit" disabled={submitting}>
						Submit
					</button>
					<button
						type="button"
						disabled={pristine || submitting}
						onClick={reset}
					>
						Clear
					</button>
				</div>
			</form>
		);
	}
}

const required = value => (value ? undefined : 'Required')

export default reduxForm({
	form: "newBibleMemory"
})(connect(null, actions)(NewBibleMemoryForm));
