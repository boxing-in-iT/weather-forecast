import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://weatherapi-com.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "468f045a53msh0c1d0810262e0d5p1eba0fjsn7063a3d95434"
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    currentWeather: builder.query({
      query: (city) => `current.json?q=${city}`,
    }),
    foreCast: builder.query({
      query: (city) => `forecast.json?q=${city}&days=3`,
    }),
  }),
});

export const { useCurrentWeatherQuery, useForeCastQuery } = weatherApi;
