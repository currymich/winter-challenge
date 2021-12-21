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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const AuthButton = styled(Link)`
  background-color: #d6635b;
  padding: 5px 15px;
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
  const currentLocation = window.location.pathname;

  return (
    <Nav>
      <Logo to={authenticated ? "/dashboard" : "/"}>WINTER CHALLENGE</Logo>

      {!authenticated ? (
        <ButtonContainer>
          <AuthButton to={"/signup"}>Signup</AuthButton>

          <AuthButton to={"/login"}>Login</AuthButton>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          {currentLocation !== "/dashboard" && (
            <Link to={"/dashboard"}>Go to dashboard</Link>
          )}

          <AuthButton onClick={() => dispatch({ type: "LOGOUT" })} to={"/"}>
            Logout
          </AuthButton>
        </ButtonContainer>
      )}
    </Nav>
  );
};

export default Header;
