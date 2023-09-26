import React from "react";
import { styled } from "styled-components";
import WeatherCard from "../components/WeatherCard";
import { useDispatch, useSelector } from "react-redux";
import {
  useCurrentWeatherQuery,
  useForeCastQuery,
} from "../redux/services/weatherApi";
import Loader from "../components/Loader";

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 200;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: rgb(0 0 0);
  text-align: left;

  padding-right: 1rem;
`;

const WeatherCardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: rgb(255 255 255);
  gap: 2rem;
  @media (max-width: 640px) {
    justify-content: flex-start;
  }
`;

const Discover = () => {
  const activeCity = useSelector((state) => state.city);
  const activeDay = useSelector((state) => state.day);
  const dispatch = useDispatch();
  const { data, isFetching, error } = useForeCastQuery(activeCity.city);

  if (isFetching) return <Loader title="loading songs..." />;
  console.log(activeDay);

  const foreCast = [
    {
      title: "Sun",
      title1:
        "Rise " + data?.forecast?.forecastday[activeDay.day]?.astro.sunrise,
      title2: "Set " + data?.forecast?.forecastday[activeDay.day]?.astro.sunset,
    },
    {
      title: "Temperature History",
      title1: data?.forecast?.forecastday[activeDay.day]?.day.maxtemp_c + " °C",
      title2: data?.forecast?.forecastday[activeDay.day]?.day.mintemp_c + " °C",
    },
    {
      title: "Humidity",
      title1: data?.forecast?.forecastday[activeDay.day]?.day.avghumidity + "%",
    },
    {
      title: "Chance of rain",
      title1:
        data?.forecast?.forecastday[activeDay.day]?.day.daily_chance_of_rain +
        "%",
    },
    {
      title: "Wind",
      title1:
        data?.forecast?.forecastday[activeDay.day]?.day.maxwind_kph + " km/h",
    },
    {
      title: "UV Index",
      title1: data?.forecast?.forecastday[activeDay.day]?.day.uv,
    },
  ];

  return (
    <Section>
      <Container>
        <Title>Today</Title>
        <Title>ForeCast</Title>
      </Container>
      <WeatherCardDiv>
        {foreCast.map((data, i) => (
          <WeatherCard key={i} data={data} />
        ))}
      </WeatherCardDiv>
    </Section>
  );
};

export default Discover;
