import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";

class NewBookReadingForm extends Component {
	onSubmit(values) {
		const { createGoal, reset } = this.props;

		createGoal(values, "bookReading");
		reset();
	}

	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<div>
					<label>Book Read</label>
					<div>
						<Field name="bookTitle" component="select" style={{display: 'block'}}>
							<option>Select a book...</option>
							<option value="100Case For Christmas">Case For Christmas</option>
							<option value="100Chuck Colson">Any Chuck Colson Book</option>
							<option value="100CS Lewis Fiction">CS Lewis Fiction</option>
							<option value="100Shepherd looks">Shepherd looks at Psalm 23</option>
							<option value="150Case for Grace">Case for Grace</option>
							<option value="150Tactics">Tactics</option>
							<option value="150Gospel">Gospel</option>
							<option value="150Do Hard Things">Do Hard Things</option>
							<option value="150Ask Me Anything">Ask Me Anything</option>
							<option value="150Dug Down Deep">Dug Down Deep</option>
							<option value="150The Hiding Place">The Hiding Place</option>
							<option value="150Stop Asking Jesus Into Your Heart">Stop Asking Jesus Into Your Heart</option>
							<option value="150The Hobbit">The Hobbit</option>
							<option value="150Letters From A Skeptic">Letters From A Skeptic</option>
							<option value="200Shadow of the Almighty">Shadow of the Almighty</option>
							<option value="200On Guard">On Guard</option>
							<option value="200Satan and his Kingdom">Satan and his Kingdom</option>
							<option value="200Case for Christ">Case for Christ</option>
							<option value="200The Lord of the Rings">The Lord of the Rings</option>
							<option value="200Mere Christianity">Mere Christianity</option>
							<option value="200The Calvary Road">The Calvary Road</option>
						</Field>
					</div>
				</div>
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
})(connect(null, actions)(NewBookReadingForm));
