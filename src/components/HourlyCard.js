import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const HourlyCard = ({ data }) => {
  // const dateTimeString = data.time.split(" ").parts[1].split(":")[0];
  // console.log(dateTimeString); // Выводит "19"
  const dateTimeString = data.time;
  const parts = dateTimeString.split(" "); // Разбиваем строку по пробелу
  const timePart = parts[1]; // Получаем вторую часть (19:00)
  const hours = timePart.split(":")[0]; // Разбиваем по двоеточию и берем первую часть (19)
  return (
    <Container>
      <div>{hours}</div>
      <img src={data.condition.icon} />
      <div>{data.temp_c}</div>
    </Container>
  );
};

export default HourlyCard;
