import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "../providers/Auth";
import styled from "styled-components";
import { Button } from "antd";

const Nav = styled.nav`
  padding: 10px;
  background-color: #438DCFF;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-family: "Kalam", cursive;
  text-transform: uppercase;
  font-size: 2.5rem;
`;

const AuthButton = styled(Link)`
  background-color: #d6635b;
  padding: 0 15px;
  color: white;
  &:hover {
    background-color: #b5544d;
  }
  border: none;
  display: flex;
  align-items: center;
  border-radius: 2px;
`;

const Header = ({ history }) => {
  const { authenticated, user, dispatch } = useAuthState();

  return (
    <Nav>
      <Logo to={authenticated ? "/dashboard" : "/"}>WINTER CHALLENGE</Logo>

      {!authenticated ? (
        <AuthButton to={"/login"}>Login</AuthButton>
      ) : (
        <AuthButton onClick={() => dispatch({ type: "LOGOUT" })} to={"/"}>
          Logout
        </AuthButton>
      )}
    </Nav>
  );
};

export default Header;
