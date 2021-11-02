import React, { useEffect, useState } from 'react'
import Loader from "react-loader-spinner";
import getWeather from "../../utils/getWeather";
import { useQuery } from "react-query";

export default function WeatherCard({ points }) {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const { data, status } = useQuery(["weather", points], getWeather(points));

    useEffect(() => {
        if (status === "success") {
            setWeather(data);
            setLoading(false);
        }
    }, [data, status]);

    return (
        <>
            {loading ? (<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />) : (
                <div className="weather-card">
                    <div className="weather-card__header">
                        <div className="weather-card__header-title">
                            {weather.properties.periods[0].name}
                        </div>
                    </div>
                    <div className="weather-card__body">
                        <div className="weather-card__body-temp">
                            {weather.properties.periods[0].temperature}
                            {weather.properties.periods[0].temperatureUnit}
                        </div>
                        <div className="weather-card__body-wind">
                            {weather.properties.periods[0].windSpeed}
                            {weather.properties.periods[0].windDirection}
                        </div>
                        <div className="weather-card__body-icon">
                            <img src={weather.properties.periods[0].icon} alt="weather icon" />
                        </div>
                    </div>
                </div>)
            }
        </>
    )





}


