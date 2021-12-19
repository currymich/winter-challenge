import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Input, Button } from "antd";
import { useAuthState } from "../providers/Auth";

const LoginFormContainer = styled(Form)`
  max-width: 800px;
  margin: 100px auto;
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

const LoginPage = ({ history }) => {
  const [errors, setErrors] = useState({});
  const { authenticated, dispatch } = useAuthState();

  const onSubmit = (values) => {
    axios.post("/api/login", values).then((res) => {
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
    <LoginFormContainer
      name="login"
      onFinish={onSubmit}
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      onValuesChange={onValuesChanged}
    >
      <FormTitle>Login</FormTitle>

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
      <Form.Item wrapperCol={{ span: 21 }}>
        <ButtonContainer>
          <a href="/signup">Signup for new account</a>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </ButtonContainer>
      </Form.Item>
    </LoginFormContainer>
  );
};

export default LoginPage;
