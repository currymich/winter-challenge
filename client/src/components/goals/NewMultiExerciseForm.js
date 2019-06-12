import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";
import exerciseList from '../../static_data/exerciseList';
import _ from 'lodash';

class NewMultiExeriseForm extends Component {
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
					<div className="red-text">
						{touched && error}
					</div>
				</div>
			</div>
		);
	}

  onSubmit(values) {
    const {createGoal, reset} = this.props;

    createGoal(values, 'exercise');
    reset();
  }

	renderExerxises() {
		return _.map(exerciseList, verse => {
			return (
				<option
					value={`${verse.description}`}
					key={`${verse.id}`}
				>
					{verse.description}
				</option>
			);
		});
	}

	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h5 className="formTitle">New Memory Verse</h5>
				<div>
					<label>Exercise Completed</label>
					<Field
						name="description"
						component="select"
						style={{ display: "block" }}
						validate={required}
					>
						<option value="">Please select an exercise...</option>
						{this.renderExerxises()}
					</Field>
				</div>
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

const required = value => (value && value !== "" ? undefined : 'Required')

function mapStateToProps(state) {
	return { goals: state.goals };
}

export default reduxForm({
	form: "newMultiExerciseMemory"
})(connect(mapStateToProps, actions)(NewMultiExeriseForm));
