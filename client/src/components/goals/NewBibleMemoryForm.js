import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";
import verseList from '../../static_data/verseList'
import _ from 'lodash';

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
					<div className="red-text">
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

	renderVerses() {
		return _.map(verseList, verse => {
			return (
				<option
					value={`${verse.reference}`}
					key={`${verse.id}`}
				>
					{verse.reference}
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
					<label>Verse Memorized</label>
					<Field
						name="verse"
						component="select"
						style={{ display: "block" }}
					>
						<option>Please select a verse...</option>
						{this.renderVerses()}
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

export default reduxForm({
	form: "newBibleMemory"
})(connect(null, actions)(NewBibleMemoryForm));
