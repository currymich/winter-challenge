import React from "react";

const NewExerciseForm = () => {
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

  //   createGoal(values, 'exercise');
  //   reset();
  // }

  // const { handleSubmit, pristine, reset, submitting } = this.props;

  return <div>exercise</div>;
  // <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
  // 	<h5 className="formTitle">New Exercise</h5>
  // 	<Field
  // 		name="distance"
  // 		type="Number"
  //     label="Distance Ran (Miles)"
  //     placeholder="5"
  // 		component={this.renderField}
  // 		validate={positive}
  // 	/>
  // 	<div className="form-buttons">
  // 		{/* <button type="submit" disabled={submitting}>
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

// const positive = value => (value > 0 ? undefined : 'Enter a positive number')

export default NewExerciseForm;
