import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./services/weatherApi";
import cityReducer from "./features/citySlice";
import dayReducer from "./features/citySlice";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    city: cityReducer,
    day: dayReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});
