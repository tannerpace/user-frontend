import React, { useEffect, useState } from 'react'
import Loader from "react-loader-spinner";
import getWeather from "../../utils/getWeather";
import { useQuery } from "react-query";
import useStyles from "./styles";

export default function WeatherCard({ points }) {
    const classes = useStyles()
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
                <div className={classes.weather__card}>
                    <div className={classes.icon}>
                        <img src={weather.properties.periods[0].icon} alt="weather icon" />
                    </div>
                    <div className={classes.weather__card__header}>
                        <div className="weather-card__header-title">
                            {weather.properties.periods[0].name}
                        </div>
                    </div>
                    <div className="weather-card__body">
                        <div className={classes.weather__card__body__temp}>
                            {weather.properties.periods[0].temperature}
                            {weather.properties.periods[0].temperatureUnit}
                        </div>
                        <div className={classes.wind}>
                            {weather.properties.periods[0].windSpeed}      {weather.properties.periods[0].windDirection}
                        </div>

                    </div>
                </div>)
            }
        </>
    )





}


