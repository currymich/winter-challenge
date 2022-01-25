import React, { Component } from "react";
import _ from "lodash";
import { useGoalsState } from "../providers/Goals";
import styled from "styled-components";

const ChartContainer = styled.div`
  max-width: 768px;

  margin: 25px auto;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2%;
  color: #fff;
`;

const Chart = styled.div`
  padding: 10px;
  max-width: 768px;
  background-color: #384f65;
  border: 3px solid white;
  border-radius: 5px;
  margin: 1em auto;
`;

const Scoreboard = () => {
  const { scoreboard } = useGoalsState();

  const renderChart = (data) => {
    const points = data.map((d) => {
      if (d.uniqUsers && d.uniqUsers.length) {
        return Math.round(d.points / d.uniqUsers.length * 10) / 10;
      }
      return 0;
    });

    var max = points.reduce((a, b) => {
      return Math.max(a, b);
    }, 0);

    data.forEach((d, i) => {
      d.width = 100 * (points[i] / max);
    });

    return data.map((d, i) => {
      return (
        <div key={d.team} className="bar" style={{ width: d.width + "%" }}>
          {`${d.team} (avg: ${points[i]}) (total: ${d.points})`}
        </div>
      );
    });
  };

  return (
    <ChartContainer>
      <Title>Points by Team</Title>
      <Chart>{renderChart(scoreboard)}</Chart>
    </ChartContainer>
  );
};

export default Scoreboard;
