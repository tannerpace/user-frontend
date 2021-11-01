import React from "react";
//import the action to get the location
import { getLocation } from "../../actions/Location/locations";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import LocationCard from "../LocationCard";
import Loader from "react-loader-spinner";

// make a functional componet that calls the action
const Location = () => {
    const { id } = useParams();
    const { data, status } = useQuery(["location", id], () => getLocation(id))
    if (status === "loading") {
        return <Loader type={"Puff"} height={"50%"} width={'auto'} />;
    }
    if (status === "error") {
        return <div>Error</div>;
    }
    return (
        <LocationCard location={data} />
    );
}
//export the component
export default Location;