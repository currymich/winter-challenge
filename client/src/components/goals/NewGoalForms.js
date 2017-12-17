import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './render';
import * as actions from '../../actions';

const NewBibleReadingForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(actions.newBibleReading)}>
      <Field
        name="book"
        type="text"
        component={renderField}
        label="Book of Bible"
        placeholder = "Genesis"
      />
      <Field
        name="chapter"
        type="number"
        component={renderField}
        label="Chapter"
        placeholder = "1-5"
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'newBibleReading',
})(NewBibleReadingForm)
