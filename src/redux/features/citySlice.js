import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "Chernivtsi",
  day: 0,
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.city = action.payload;
    },
    changeDay: (state, action) => {
      state.day = action.payload;
    },
  },
});

export const { addCity, changeDay } = citySlice.actions;
export default citySlice.reducer;
