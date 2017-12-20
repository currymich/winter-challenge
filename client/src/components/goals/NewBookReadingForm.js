import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";
import bookList from "../../static_data/bookList.js";
import _ from "lodash";

class NewBookReadingForm extends Component {
	onSubmit(values) {
		const { createGoal, reset } = this.props;

		createGoal(values, "bookReading");
		reset();
	}

  alreadyRead(title) {
    let {goals} = this.props;
    let titlesRead = goals.filter(goal => goal.type === 'bookReading').map(function(goal) { return goal.book; });
    return (titlesRead.includes(title));
  }

	renderBooks() {
		return _.map(bookList, book => {
			return (
				<option
					value={`${book.points}${book.bookTitle}`}
					key={`${book.bookTitle}`}
          disabled={this.alreadyRead(`${book.bookTitle}`)}
				>
					{book.bookTitle}
				</option>
			);
		});
	}

	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h5 className="formTitle">New Reading</h5>
				<div>
					<label>Book Read</label>
					<div>
						<Field
							name="bookTitle"
							component="select"
							style={{ display: "block" }}
						>
							<option>Please select a book...</option>
							{this.renderBooks()}
						</Field>
					</div>
				</div>
				<div className="form-buttons">
					<button type="submit" disabled={pristine || submitting}>
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

function mapStateToProps(state) {
	return { goals: state.goals };
}

export default reduxForm({
	form: "newBookReading"
})(connect(mapStateToProps, actions)(NewBookReadingForm));
