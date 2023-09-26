import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addCity } from "../redux/features/citySlice";

const Input = styled.input`
  border-radius: 20px; /* Настройте радиус скругления по вашему усмотрению */
  padding: 10px;
  width: 100%;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px; /* Расстояние значка лупы от правого края */
  cursor: pointer;
`;

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const activeCity = useSelector((state) => state.city);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    dispatch(addCity(searchValue));
    console.log(searchValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  console.log(activeCity.city);
  return (
    <>
      <Input
        type="text"
        className="rounded-input"
        placeholder={activeCity.city}
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <SearchIcon className="search-icon" />
    </>
  );
};

export default SearchBar;
