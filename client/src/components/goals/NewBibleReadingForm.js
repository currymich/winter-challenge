import React from "react";
import bibleBookList from "../../static_data/bibleBookList";
import _ from "lodash";

const NewBibleReadingForm = () => {
  // renderField(field) {
  // 	const {
  // 		input,
  // 		label,
  // 		type,
  // 		placeholder,
  // 		meta: { touched, error }
  // 	} = field;

  // 	return (
  // 		<div>
  // 			<label>{label}</label>
  // 			<div>
  // 				<input {...input} placeholder={placeholder} type={type} />
  // 				<div className="red-text">
  // 					{touched && error}
  // 				</div>
  // 			</div>
  // 		</div>
  // 	);
  // }

  // onSubmit(values) {
  //   const {createGoal, reset} = this.props;

  //   createGoal(values, 'bibleReading');
  //   reset();
  // }

  // renderBibleBooks() {
  // 	return _.map(bibleBookList, book => {
  // 		return (
  // 			<option
  // 				value={`${book.title}`}
  // 				key={`${book.id}`}
  // 			>
  // 				{book.title}
  // 			</option>
  // 		);
  // 	});
  // }

  // const { handleSubmit, pristine, reset, submitting } = this.props;

  return <div>bible reading</div>;
  // <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
  // 	<div>
  // 		<h5 className="formTitle">New Bible Reading</h5>
  // 		<label>Book of the Bible</label>
  // 		<Field
  // 			name="book"
  // 			component="select"
  // 			style={{ display: "block" }}
  // 			validate={required}
  // 		>
  // 			<option value="">Please select a book...</option>
  // 			{this.renderBibleBooks()}
  // 		</Field>
  // 	</div>
  // 	<Field
  // 		name="chapter"
  // 		type="text"
  //     label="Chapter"
  //     placeholder="1-5"
  // 		component={this.renderField}
  // 		validate={required}
  // 	/>
  // 	<div className="form-buttons">
  // 		<button type="submit" disabled={submitting}>
  // 			Submit
  // 		</button>
  // 		<button
  // 			type="button"
  // 			disabled={pristine || submitting}
  // 			onClick={reset}
  // 		>
  // 			Clear
  // 		</button>
  // 	</div>
  // </form>
};

// const required = value => (value && value !== "" ? undefined : 'Required')

export default NewBibleReadingForm;
