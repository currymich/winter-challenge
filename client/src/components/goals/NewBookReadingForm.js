import React from "react";
import bookList from "../../static_data/bookList.js";
import _ from "lodash";

const NewBookReadingForm = () => {
  // onSubmit(values) {
  // 	const { createGoal, reset } = this.props;

  // 	createGoal(values, "bookReading");
  // 	reset();
  // }

  // alreadyRead(title) {
  //   let {goals} = this.props;
  //   let titlesRead = goals.filter(goal => goal.type === 'bookReading').map(function(goal) { return goal.book; });
  //   return (titlesRead.includes(title));
  // }

  // renderBooks() {
  // 	return _.map(bookList, book => {
  // 		return (
  // 			<option
  // 				value={`${book.points}${book.bookTitle}`}
  // 				key={`${book.bookTitle}`}
  //         disabled={this.alreadyRead(`${book.bookTitle}`)}
  // 			>
  // 				{book.bookTitle}
  // 			</option>
  // 		);
  // 	});
  // }

  // const { handleSubmit, pristine, reset, submitting, selectedBook } = this.props;
  return <div>book reading</div>
  // <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
  // 	<h5 className="formTitle">New Reading</h5>
  // 	<div>
  // 		<label>Book Read</label>
  // 		<div>
  // 			<Field
  // 				name="bookTitle"
  // 				component="select"
  // 				style={{ display: "block" }}
  // 				validate={required}
  // 			>
  // 				<option value="">Please select a book...</option>
  // 				<option value="custom">Enter a custom book:</option>
  // 				{this.renderBooks()}
  // 			</Field>
  // 		</div>
  // 		{selectedBook === "custom" &&
  //     <div>
  //       <label>Book Title</label>
  //       <div>
  //         <Field
  //           name="customTitle"
  //           component="input"
  //           type="text"
  //           placeholder="Title"
  // 					validate={required}
  //         />
  //       </div>
  // 			<label>Book Title</label>
  //       <div>
  //         <Field
  //           name="customPoints"
  //           component="input"
  //           type="number"
  //           placeholder="Points"
  // 					validate={required}
  //         />
  //       </div>
  //     </div>}
  // 	</div>
  // 	<div className="form-buttons">
  // 		{/* <button type="submit" disabled={pristine || submitting}>
  // 			Submit
  // 		</button> */}
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

// const selector = formValueSelector('newBookReading');
// function mapStateToProps(state) {
// 	const selectedBook = selector(state, 'bookTitle')
// 	return { selectedBook, goals: state.goals };
// }

// NewBookReadingForm = reduxForm({
// 	form: "newBookReading"
// })(connect(mapStateToProps, actions)(NewBookReadingForm));

export default NewBookReadingForm;
