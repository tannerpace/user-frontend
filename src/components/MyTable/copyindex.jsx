import DataTable from 'react-data-table-component';
import React from 'react';
import { useQuery } from 'react-query';
import { getLocations } from '../../actions/Location/locations';
import { Checkbox, Paper, Radio, TableHead } from '@mui/material';
import SortIcon from "@mui/material/Icon/Icon";
import { useHistory, useLocation } from 'react-router';
import useStyles from "./styles"



const MyTable = () => {
    const classes = useStyles();
    const history = useHistory()
    const location = useLocation()
    const { data: locations } = useQuery("locationList", () => getLocations())
    const isIndeterminate = (indeterminate) => indeterminate;
    const selectableRowsComponentProps = { indeterminate: isIndeterminate };



    const columns = [

        {
            name: 'locationname',
            selector: row => row.locationname,

        },
        {
            name: 'winddirections',
            selector: row => row.winddirections,
        },
        {
            name: 'experience',
            selector: row => row.experience,
        }

    ];

    return (
        <Paper>

            <DataTable

                className={classes.table}
                columns={columns}
                data={locations}
                expandOnRowClicked
                responsive
                defaultSortField="locationname"
                sortIcon={<SortIcon />}
                pagination
                paginationPerPage={5}
                onRowClicked={(row) => history.push(`/location/get/${row.id}`)}
                selectableRowsComponentProps={selectableRowsComponentProps}

            /></Paper>
    );
};

export default MyTable