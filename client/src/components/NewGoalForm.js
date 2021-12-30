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
  const { createGoal } = useGoalsState();
  const [selectedGoalType, setSelectedGoalType] = useState(
    Object.values(goalTypes)[0].value
  );
  const [selectedMultiplyer, setSelectedMultiplyer] = useState(1);
  const { user } = useAuthState();
  const [form] = Form.useForm();

  const onGoalChange = (value) => {
    setSelectedGoalType(value);
  };

  const onMultiplyerChange = (value) => {
    setSelectedMultiplyer(value);
  };

  const onSubmit = async (values) => {
    let points = goalTypes[selectedGoalType].pointCalculation(values);

    if (values.multiplyer && selectedGoalType !== "exercise") {
      points = points * parseInt(values.multiplyer);
    }

    createGoal({
      ...values,
      user_id: user._id,
      name: user.name,
      team: user.team,
      type: values.type || selectedGoalType,
      points,
    });
    form.resetFields();
  };

  return (
    <StyledForm onFinish={onSubmit} form={form}>
      <FormTitle>Enter New Goal</FormTitle>
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
          rules={[{ required: field.required }]}
          help={field.help}
        >
          <Input placeholder={field.placeholder || ""} />
        </Form.Item>
      ))}
      {selectedGoalType !== "exercise" && (
        <Form.Item
          name="multiplyer"
          label="Number of participants (including you!)"
          help="Point value is multiplied by the num of people you did the activity with"
        >
          <Select
            placeholder="3"
            defaultValue={selectedMultiplyer}
            onChange={onMultiplyerChange}
          >
            {[1, 2, 3, 4, "5+"].map((num) => (
              <Option value={num} key={num}>
                {num}
              </Option>
            ))}
          </Select>
        </Form.Item>
      )}

      <div className="form-buttons">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </StyledForm>
  );
};

export default NewGoalForm;
