import React from "react";
import { styled } from "styled-components";
import DateComponent from "./DateComponent";
import { useDispatch, useSelector } from "react-redux";

const Card = styled.div``;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const TemperatureBar = styled.div`
  bottom: 0;
  left: 0;
  height: 4px; /* Высота полосы */

  width: 40%;
  border-radius: 5rem;
  background: rgb(105, 105, 105);
`;

const ResultBar = styled.div`
  bottom: 0;
  left: 0;
  height: 4px; /* Высота полосы */
  border-radius: 5rem;

  width: ${(props) =>
    props.maxTemp - props.minTemp}; /* Процентное значение заполнения полосы */
  background: linear-gradient(to right, #007aff, #ffcc00);
`;

const ForeCast = ({ data, onClick }) => {
  const activeDay = useSelector((state) => state.city);
  const dispatch = useDispatch();

  return (
    <Card onClick={onClick}>
      <Div>
        <DateComponent date={data.date} />
        <img alt="icon" src={data.day.condition.icon} />
        <div>{data.day.mintemp_c}</div>

        <TemperatureBar>
          <ResultBar
            minTemp={data.day.mintemp_c}
            maxTemp={data.day.maxtemp_c}
          />
        </TemperatureBar>

        <div>{data.day.maxtemp_c}</div>
      </Div>
    </Card>
  );
};

export default ForeCast;
