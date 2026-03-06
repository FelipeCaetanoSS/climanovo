import { createContext, useState, useContext } from 'react';
import { weatherApi } from './weatherService';

const WeatherContext = createContext({});

export function WeatherProvider({ children }){
    const [city, setCity] = useState("");

    function getData(){
        const data = weatherApi.getCity();
        setCity(data);
    }

    return (
    <WeatherContext.Provider value={{ city, getData}}>
        {children}
    </WeatherContext.Provider>
    );
}

export function useWeatherCity(){
    const context = useContext(WeatherContext);
    return context;
}