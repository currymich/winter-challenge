import React, { useState } from "react";
import _ from "lodash";
import { Form, Input, Button, Select } from "antd";
import styled from "styled-components";
import { useGoalsState } from "../providers/Goals";
import { useAuthState } from "../providers/Auth";
import goalTypes from "../constants/goalTypes";

const { Option } = Select;

const StyledForm = styled(Form)`
  margin: 50px auto;
  max-width: 768px;
  background-color: #aa5555;
  padding: 3em;
  border: 3px solid #fff;
  border-radius: 5px;
`;

const FormTitle = styled.h2`
  width: 100%;
  padding: 10px;
  text-align: center;
  margin-bottom: 1em;
`;

const NewGoalForm = () => {
  const { createGoal, setUserGoals } = useGoalsState();
  const [selectedGoalType, setSelectedGoalType] = useState(
    Object.values(goalTypes)[0].value
  );
  const { user } = useAuthState();
  const [form] = Form.useForm();

  const onGoalChange = (value) => {
    console.log("hit", value);
    setSelectedGoalType(value);
  };

  const onSubmit = async (values) => {
    createGoal({
      ...values,
      user_id: user._id,
      name: user.name,
      type: values.type || selectedGoalType,
      points: goalTypes[selectedGoalType].pointCalculation(values),
    });
    form.resetFields();
  };

  return (
    <StyledForm onFinish={onSubmit} form={form}>
      <FormTitle>New Goal Completed</FormTitle>
      <Form.Item name="type" label="Goal">
        <Select
          placeholder="Select a goal"
          defaultValue={selectedGoalType}
          onChange={onGoalChange}
        >
          {Object.values(goalTypes).map((type) => (
            <Option value={type.value} key={type.value}>
              {type.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {goalTypes[selectedGoalType].fields.map((field) => (
        <Form.Item
          label={field.label}
          name={field.name}
          rules={[{ required: true }]}
        >
          <Input placeholder={field.placeholder || ""} />
        </Form.Item>
      ))}

      <div className="form-buttons">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </StyledForm>
  );
};

export default NewGoalForm;
