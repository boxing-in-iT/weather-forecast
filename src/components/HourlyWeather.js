import React from "react";
import { styled } from "styled-components";
import { useForeCastQuery } from "../redux/services/weatherApi";
import HourlyCard from "./HourlyCard";

const Card = styled.div`
  width: 22rem;
  padding: 1rem;
  background-color: #6bb9f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  /* &:hover {
    transform: scale(1.05);
  } */
`;

const Info = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  overflow-x: scroll;
`;

const HourlyWeather = ({ city }) => {
  const { data, isFetching, error } = useForeCastQuery(city);
  const hourlyData = data?.forecast?.forecastday[0]?.hour || []; // Получаем массив данных

  return (
    <Card>
      <Info>
        {hourlyData.map((hourly, i) => (
          <HourlyCard key={i} data={hourly} /> // Передаем каждый элемент массива как проп в HourlyCard
        ))}
      </Info>
    </Card>
  );
};

export default HourlyWeather;
