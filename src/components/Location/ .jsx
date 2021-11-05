import React, { useState, useEffect } from "react";
//import the action to get the location
import { getLocation } from "../../actions/Location/locations";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import LocationCard from "../LocationCard";
import Loader from "react-loader-spinner";
import getWeather from "../../utils/getWeather";
import WeatherCard from "../WeatherCard";
import useStyles from "./styles";

// make a functional componet that calls the action
const Location = () => {
  const { id } = useParams();
  const { data, status } = useQuery(["location", id], () => getLocation(id))
  const lat = data?.latitude
  const lng = data?.longitude
  const points = { lat, lng }
  const classes = useStyles()

  const currentWeather = useQuery(["weather", points], () => getWeather(points))

  if (status === "loading") {
    return <Loader color="#90caf9" type={"Puff"} height={"50%"} width={'auto'} />;
  }
  if (status === "error") {
    return <div>Error</div>;
  }
  return (

    <>
      <LocationCard data={data} />


      {currentWeather.status === "loading" ? (<Loader color="#90caf9" type={"CradleLoader"} width={'auto'} style={{ color: "black", bg: "#E2E7EF" }} />) : (
        <>
          <div className={classes.hidecard}>hide this{<WeatherCard points={points} classname={classes.hidecard} />}</div>
        </>
      )
      }


    </>);
}
//export the component
export default Location;