import { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
import { weatherApi } from './weatherService';
import { touristPointsApi } from '../touristPoints/touristPointsService';

const WeatherContext = createContext({});

export function WeatherProvider({ children }){
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

if (city === null) {
    const lastCity = localStorage.getItem('lastCity');
    setCity(lastCity);
}

    async function searchWeather(newCity){
        setCity(newCity);
        localStorage.setItem('lastCity', {city});
    }
    
    useEffect(() => {
        if (!city) return;
        const fetchWeather = async () => {
            setLoading(true);

            const responseWeather = await weatherApi.setCity(city);
            const dataWeather = responseWeather.json();
            const responseLocals = await touristPointsApi.request();
            const dataLocals = responseLocals.json();
            setLoading(false);

            if(!dataWeather){
            setError("Não foi possível encontrar a cidade.");
            exit;
            }
            if(!dataLocals){
            setError("Não foi possível encontrar os pontos turisticos.");
            exit;
            }
            setWeatherData(dataWeather);
            setWeatherLocals(dataLocals);
        };

        fetchWeather();
    }, [city]);


    return (
    <WeatherContext.Provider value={{ city, weatherData, loading, error, searchWeather}}>
        {children}
    </WeatherContext.Provider>
    );
}

export function useWeatherCity(){
    const context = useContext(WeatherContext);
    return context;
}