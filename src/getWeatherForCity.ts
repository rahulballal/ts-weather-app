import { gql } from '@apollo/client'

export const getWeatherByCityQuery = gql`
  query getWeatherByCityQuery($cityName: String!) {
    getCityByName(name: $cityName) {
      id
      name
      country
      weather {
        summary {
          title
          description
        }
      }
    }
  }
`
