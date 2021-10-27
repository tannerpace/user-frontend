import React from 'react'

import { DataGrid } from "@mui/x-data-grid";
import { getLocations } from '../../actions/Location/locations';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useMutation } from 'react-query';
import { Box, Typography } from "@mui/material"


const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "XGrid", col2: "is Awesome" },
    { id: 3, col1: "Material-UI", col2: "is Amazing" },
    { id: 4, col1: "Hello", col2: "World" },
    { id: 5, col1: "XGrid", col2: "is Awesome" },
    { id: 6, col1: "Material-UI", col2: "is Amazing" }
];

const columns = [
    { field: "id", hide: true },
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 }
];
export default function LocationsList() {

    const { data: locations } = useQuery("locationList", () => getLocations())
    console.log("locations", locations)




    const allLocation = locations?.map(x => {
        return (<Box key={x.id}><h1>{x.locationname}</h1>
            <Typography>{x.description}</Typography></Box>)
    })





    return (
        <div style={{ height: "100vh", width: "100%", marginTop: "60px" }}>
            {/* <DataGrid rows={rows} columns={columns} /> */}

            <button >Locations Button</button>
            <div>{allLocation}</div>
        </div>
    )
}
