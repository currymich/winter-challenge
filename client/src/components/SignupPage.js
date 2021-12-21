import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Form, Input, Button, Select } from "antd";
import { useAuthState } from "../providers/Auth";

const { Option } = Select;

const SignupFormContainer = styled(Form)`
  width: auto;
  margin: 10%;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
`;

const FormTitle = styled.h2`
  width: 100%;
  font-weight: 800;
  text-decoration: underline;
  text-align: center;
  margin-bottom: 2em;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const teams = ["Uppers Bros", "Lowers/Staff Bros", "Sisters"];

const SignupPage = ({ history }) => {
  const [errors, setErrors] = useState({});
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  const { authenticated, dispatch } = useAuthState();

  const onTeamChange = (value) => {
    setSelectedTeam(value);
  };

  const onSubmit = (values) => {
    const newUser = {
      ...values,
      team: values.team || selectedTeam,
    };

    axios.post("/api/signup", newUser).then((res) => {
      if (res.data && res.data.message === "Email not found") {
        setErrors({ email: "Email not found" });
      } else if (res.data && res.data.message === "Incorrect password") {
        setErrors({ password: "Incorrect password" });
      } else {
        dispatch({ type: "LOGIN", user: res.data.user });
        history.push("/dashboard");
      }
    });
  };

  const onValuesChanged = (changedValues) => {
    // clear errors on fields that have been updated
    const updatedErrors = { ...errors };
    delete updatedErrors[Object.keys(changedValues)[0]];

    setErrors(updatedErrors);
  };

  return (
    <SignupFormContainer
      name="login"
      onFinish={onSubmit}
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      onValuesChange={onValuesChanged}
    >
      <FormTitle>Signup</FormTitle>

      <Form.Item
        label="Name"
        name="name"
        validateStatus={errors.name ? "error" : ""}
        help={errors.name}
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        validateStatus={errors.email ? "error" : ""}
        help={errors.email}
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        validateStatus={errors.password ? "error" : ""}
        help={errors.password}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="team"
        label="Team"
        help="Existing members have been manually added :)"
      >
        <Select defaultValue={selectedTeam} onChange={onTeamChange}>
          {["Uppers Bros", "Lowers/Staff Bros", "Sisters"].map((team) => (
            <Option value={team} key={team}>
              {team}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 21 }}>
        <ButtonContainer>
          <Link to="/login">Have an existing account?</Link>
          <Button type="primary" htmlType="submit">
            Signup
          </Button>
        </ButtonContainer>
      </Form.Item>
    </SignupFormContainer>
  );
};

export default SignupPage;
