import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";

class NewBibleReadingForm extends Component {
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
					<div className="red-text" style={{ marginBottom: "20px" }}>
						{touched && error}
					</div>
				</div>
			</div>
		);
	}

  onSubmit(values) {
    const {createGoal, reset} = this.props;

    createGoal(values, 'bibleReading');
    reset();
  }

	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					name="book"
					type="text"
          label="Book of Bible"
          placeholder="Genesis"
					component={this.renderField}
				/>
				<Field
					name="chapter"
					type="text"
          label="Chapter"
          placeholder="1-5"
					component={this.renderField}
				/>
				<div>
					<button type="submit" disabled={submitting}>
						Submit
					</button>
					<button
						type="button"
						disabled={pristine || submitting}
						onClick={reset}
					>
						Clear Values
					</button>
				</div>
			</form>
		);
	}
}

export default reduxForm({
	form: "newBibleReading"
})(connect(null, actions)(NewBibleReadingForm));
