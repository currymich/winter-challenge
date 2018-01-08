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

	alreadyMemorized(reference) {
		let {goals} = this.props;
		let versesMemorized = goals.filter(goal => goal.type === 'bibleMemory').map(function(goal) { return goal.verse; });
		return (versesMemorized.includes(reference));
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
					disabled={this.alreadyMemorized(`${verse.reference}`)}
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
						validate={required}
					>
						<option value="">Please select a verse...</option>
						{this.renderVerses()}
					</Field>
				</div>
				<div className="form-buttons">
					{/* <button type="submit" disabled={submitting}>
						Submit
					</button> */}
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
	form: "newBibleMemory"
})(connect(mapStateToProps, actions)(NewBibleMemoryForm));
