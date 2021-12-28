import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { useGoalsState } from "../providers/Goals";
import _ from "lodash";

import styled from "styled-components";

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

const StyledList = styled.div`
  margin: ${(props) => props.margin || "50px auto"};
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "40px"};
`;

const Admin = () => {
  const { fetchAllGoals } = useGoalsState();
  const [allGoals, setAllGoals] = useState([]);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const res = await fetchAllGoals(values.pass);
    if (res.error) {
      setError(res.error);
    } else {
      setAllGoals(res.data);
    }
  };

  return (
    <>
      <StyledForm onFinish={onSubmit}>
        <FormTitle>Admin</FormTitle>

        <Form.Item
          label="Pass"
          name="pass"
          validateStatus={error ? "error" : ""}
          help={error}
          rules={[{ required: true }]}
        >
          <Input placeholder="Password" />
        </Form.Item>

        <div className="form-buttons">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </StyledForm>
      <StyledList>
        {allGoals.map(({ user_name, points, userGoals }) => (
          <div>
            <div style={{fontWeight: '800'}}>Name: {user_name}</div>
            <div style={{fontWeight: '800'}}>Total Points: {points}</div>
            <StyledList gap="5px" margin="0 auto">
              Goals:
              {userGoals.map((goal) => (
                <div>{JSON.stringify(_.omit(goal, "user_name"))}</div>
              ))}
            </StyledList>
          </div>
        ))}
      </StyledList>
    </>
  );
};

export default Admin;
