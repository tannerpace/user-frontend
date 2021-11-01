
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory, useLocation } from 'react-router';
import { getLocations } from '../../actions/Location/locations';
import { makeStyles } from '@mui/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
} from "@mui/material"

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
}));

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

function MyTable() {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const history = useHistory()

    const { data: locations } = useQuery("locationList", () => getLocations())
    const classes = useStyles();


    const handleRowClick = (event, row) => {
        // history.push(`/location/${row.id}`)

        console.log(`event`, event)

        console.log("row", row)
    }



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>Location </TableCell>
                        <TableCell className={classes.tableHeaderCell}>Wind Directions</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Experience </TableCell>
                        <TableCell className={classes.tableHeaderCell}>Safe Today?</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {locations?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.id} data={locations}>
                            <TableCell>
                                <Grid container>
                                    <Grid item lg={4}>
                                        <Avatar alt={row.name} src='.' className={classes.avatar} />
                                    </Grid>
                                    <Grid item lg={8}>
                                        <Typography className={classes.name}>{row.name}</Typography>
                                        <Typography color="textSecondary" variant="body2">{row.locationname}</Typography>

                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Typography color="primary" variant="subtitle2">{row.winddirections}</Typography>
                                {/* <Typography color="textSecondary" variant="body2">{row.company}</Typography> */}
                            </TableCell>
                            <TableCell>{row.experience}</TableCell>
                            <TableCell onClick={handleRowClick}>
                                <Typography
                                    name="id"
                                    data={locations}
                                    className={classes.status}
                                    style={{
                                        backgroundColor:
                                            ((row.status === 'Active' && 'green') ||
                                                (row.status === 'Pending' && 'blue') ||
                                                (row.status === 'Blocked' && 'orange'))
                                    }}

                                >{row.id}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={locations?.length}
                        paginationPerPage={5}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default MyTable;