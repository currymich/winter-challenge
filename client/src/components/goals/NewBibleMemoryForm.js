import React from "react";
import verseList from "../../static_data/verseList";
import _ from "lodash";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { useGoalsState } from "../../providers/Goals";
import { useAuthState } from "../../providers/Auth";

const FormTitle = styled.h2`
  width: 100%;
  padding: 10px;
  text-align: center;
  margin-bottom: 1em;
`;

const NewBibleMemoryForm = () => {
  const { createGoal, setUserGoals } = useGoalsState();
  const { user } = useAuthState();

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

  // alreadyMemorized(reference) {
  // 	let {goals} = this.props;
  // 	let versesMemorized = goals.filter(goal => goal.type === 'bibleMemory').map(function(goal) { return goal.verse; });
  // 	return (versesMemorized.includes(reference));
  // }

  const onSubmit = async (values) => {
    const userGoals = await createGoal({
      user_id: user._id,
      name: user.name,
      type: "bibleMemory",
      points: 10,
      ...values,
    });
  };

  // renderVerses() {
  // 	return _.map(verseList, verse => {
  // 		return (
  // 			<option
  // 				value={`${verse.reference}`}
  // 				key={`${verse.id}`}
  // 				disabled={this.alreadyMemorized(`${verse.reference}`)}
  // 			>
  // 				{verse.reference}
  // 			</option>
  // 		);
  // 	});
  // }

  return (
    <Form onFinish={onSubmit}>
      <FormTitle>New Memory Verse</FormTitle>
      <Form.Item
        label={"Verse Memorized"}
        name="verse"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      {/* <Field
        name="verse"
        component="select"
        style={{ display: "block" }}
        validate={required}
      >
        <option value="">Please select a verse...</option>
        {this.renderVerses()}
      </Field> */}

      <div className="form-buttons">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        {/* <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear
        </button> */}
      </div>
    </Form>
  );
};

// const required = value => (value && value !== "" ? undefined : 'Required')

// function mapStateToProps(state) {
// 	return { goals: state.goals };
// }

export default NewBibleMemoryForm;
