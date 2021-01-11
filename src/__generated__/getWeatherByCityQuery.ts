/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getWeatherByCityQuery
// ====================================================

export interface getWeatherByCityQuery_getCityByName_weather_summary {
  __typename: "Summary";
  title: string | null;
  description: string | null;
}

export interface getWeatherByCityQuery_getCityByName_weather {
  __typename: "Weather";
  summary: getWeatherByCityQuery_getCityByName_weather_summary | null;
}

export interface getWeatherByCityQuery_getCityByName {
  __typename: "City";
  id: string | null;
  name: string | null;
  country: string | null;
  weather: getWeatherByCityQuery_getCityByName_weather | null;
}

export interface getWeatherByCityQuery {
  getCityByName: getWeatherByCityQuery_getCityByName | null;
}

export interface getWeatherByCityQueryVariables {
  cityName: string;
}
