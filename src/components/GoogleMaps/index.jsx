import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
: const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 32.763128623832905,
    lng: -79.88175721639628
};

function MyMap() {
    return (
        <LoadScript
            googleMapsApiKey={API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyMap)