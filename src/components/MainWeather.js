import React from "react";
import { styled } from "styled-components";
import { WiDaySunny } from "weather-icons-react";

const Desc = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-weight: 100;
  font-size: 3rem;
  margin: 0; /* Установите верхний и нижний margin в 0 */
  padding: 0; /* Установите верхний и нижний padding в 0 */
`;

const SubTitle = styled.p`
  font-weight: 900;
  font-size: 1.5rem;
  margin: 0; /* Установите верхний и нижний margin в 0 */
  padding: 0; /* Установите верхний и нижний padding в 0 */
`;

const Line = styled.div`
  margin-top: 1rem;
  width: 15rem; /* Ширина палочки */
  height: 0.3rem; /* Высота палочки */
  background-color: rgb(0 0 0 / 0.05);
  margin-left: 20px; /* Отступ слева палочки */
`;

const Image = styled.img`
  width: 7rem;
`;

const MainWeather = ({ data }) => {
  return (
    <>
      <Image alt="cover" src={data?.current?.condition?.icon} />
      <Desc>
        <Title>{data?.current.temp_c}</Title>
        <SubTitle>{data?.current?.condition.text}</SubTitle>
        <Line />
      </Desc>
    </>
  );
};

export default MainWeather;
