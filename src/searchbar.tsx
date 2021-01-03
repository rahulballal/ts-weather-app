import React from 'react'
import {Form} from "react-bootstrap";
import {useGetWeatherByCityQueryLazyQuery} from "./weather-api-types.generated";
import {addCityData} from "./store";

export const SearchBar = () => {
    const [cityName, setCityName] = React.useState('')
    const [runQuery, {data, loading, error}] = useGetWeatherByCityQueryLazyQuery()

    if (data && !loading) {
        addCityData({
            name: data.getCityByName?.name,
            id: data.getCityByName?.id,
            weather: data.getCityByName?.weather,
            country: data.getCityByName?.country,
        })
    }

    const handleOnClick: React.FormEventHandler = (evt) => {
        evt.preventDefault()
        runQuery({variables: {cityName}})
        setCityName('')
    }

    return <Form onSubmit={handleOnClick}>
        <Form.Group controlId="CityInput">
            <Form.Control placeholder="Enter a city name" type="text" size="lg" value={cityName}
                          onChange={(evt) => setCityName(evt.target.value)}/>
            {loading && <Form.Text>Finding weather information ......</Form.Text>}
            {error && <Form.Text>There has been an error fetching weather info, please try again ...</Form.Text>}
        </Form.Group>
    </Form>
}
