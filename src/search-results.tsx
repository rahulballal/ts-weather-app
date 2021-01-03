import React from 'react'
import {
    City,
} from './weather-api-types.generated'
import {useWeatherStore} from "./store";
import {Card} from "react-bootstrap";

interface ISearchResultProps {
    result: City
}

export const SearchResult: React.FC<ISearchResultProps> = ({result}) => {
    return <div>
        <p>{result.name}-{result.country}</p>
        <p>Title: {result.weather?.summary?.title}</p>
        <p>Description: {result?.weather?.summary?.description}</p>
    </div>
}

export const SearchResults: React.FC = () => {
    const snapshot = useWeatherStore()
    if (snapshot.cities.length === 0) return <p>No weather data to show</p>

    return <><hr/>{snapshot.cities.map((city: City) => <Card key={city.id}><SearchResult result={city}/></Card>)}</>
}
