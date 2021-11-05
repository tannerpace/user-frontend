//create a context for the location and weather
import React, { createContext } from 'react';
import { useState } from 'react';

import getWeather from '../utils/getWeather';
import { getLocation } from '../actions/Location/locations';
import { useMutation, useQuery, useQueryClient } from "react-query"
import PropTypes from "prop-types"
const LocationWeatherContext = createContext();
export default LocationWeatherContext


//create a provider for the context use the id to get the location data from getLocation
//use the data.location.lat and data.location.lon to get the weather data
export const LocationWeatherContainer = ({ children, ...props }) => {
  const queryClient = useQueryClient();
  const { data, status } = useQuery(["location", id], () => getLocation(id))
  const lat = data?.latitude
  const lng = data?.longitude
  const points = { lat, lng }
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [id, setId] = useState('id');

  const currentWeather = useQuery(["weather", points], () => getWeather(points))



  // a const to check if the data.winddirection arrat has the value of the current weather.properties.periods[0].windDirection
  const windDirection = data?.windDirection
  const currentWindDirection = currentWeather?.properties?.periods[0]?.windDirection
  const windDirectionCheck = windDirection.includes(currentWindDirection)

  return (
    <LocationWeatherContainer.Provider value={{
      location,
      weather,
      setLocation,
      setWeather,
      id,
      setId,
      data,
      status,
      currentWeather,
      points,
      lat,
      lng,
      windDirection,
      currentWindDirection,
      windDirectionCheck
    }}>
      {children}
    </LocationWeatherContainer.Provider>
  )
}

LocationWeatherContainer.propTypes = {
  children: PropTypes.node,

}










