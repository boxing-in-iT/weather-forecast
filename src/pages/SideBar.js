import React from "react";
import { styled } from "styled-components";
import SearchBar from "../components/SearchBar";
import MainWeather from "../components/MainWeather";
import SubInfo from "../components/SubInfo";
import HourlyWeather from "../components/HourlyWeather";

import { useDispatch, useSelector } from "react-redux";
import { useForeCastQuery } from "../redux/services/weatherApi";
import ForeCast from "../components/ForeCast";
import Loader from "../components/Loader";

import { changeDay } from "../redux/features/citySlice";

const Section = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
  overflow-y: scroll;
`;

const SearchDiv = styled.div`
  margin-top: 2rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1rem;
`;

const City = styled.h2`
  font-weight: 100;
  font-size: 3rem;
`;

const ForeCastDiv = styled.div`
  margin-top: 3%;
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

const SideBar = () => {
  const activeCity = useSelector((state) => state.city);
  const dispatch = useDispatch();
  const { data, isFetching, error } = useForeCastQuery(activeCity.city);

  if (isFetching) return <Loader title="loading songs..." />;

  const forecast = data?.forecast.forecastday;

  const handleForeCastClick = (index) => {
    dispatch(changeDay(index));
  };

  return (
    <Section>
      <SearchDiv>
        <SearchBar />
      </SearchDiv>
      <MainDiv>
        <MainWeather data={data} />
      </MainDiv>
      <InfoDiv>
        <SubInfo data={data} />
      </InfoDiv>
      <City>{data?.location?.name}</City>
      <HourlyWeather city={activeCity.city} />
      <ForeCastDiv>
        {forecast?.map((data, i) => (
          <ForeCast
            key={i}
            data={data}
            onClick={() => handleForeCastClick(i)}
          />
        ))}
      </ForeCastDiv>
    </Section>
  );
};

export default SideBar;
