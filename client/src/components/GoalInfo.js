import React from "react";
import styled from "styled-components";
import img from "../assets/koin-winter-challenge.png";

const GoalImg = styled.div`
  margin: 50px auto;
  max-width: 768px;
  height: 400px;
  background-image: url(${img});
  background-position-x: center;
  background-position-y: 60%;
  background-size: cover;
  background-color: #fff;
`;

const GoalInfo = () => (
  <>
    <GoalImg />
  </>
);

export default GoalInfo;
