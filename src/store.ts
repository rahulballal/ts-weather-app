import {proxy, useProxy, subscribe } from 'valtio'
import {City} from "./weather-api-types.generated"
import _ from 'lodash'

const stringify = (data: any) => JSON.stringify(data, null, 2)

interface IStore {
    cities: Array<City>
}

const store = proxy<IStore>({ cities: []})


export const useWeatherStore = () => {
    const snapshot = useProxy(store)
    return snapshot
}

export const addCityData = (city: City) => {
    store.cities = _.uniqBy([city, ...store.cities], 'id')
}

subscribe(store, () => console.log(stringify(store)))
