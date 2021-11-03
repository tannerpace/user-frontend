
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory, useLocation } from 'react-router';
import { getLocations } from '../../actions/Location/locations';
import useStyles from "./styles"
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
    Button,
    Input,
    TableFooter
} from "@mui/material"


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

    const handleLocationClick = (event) => {
        history.push(`/location/get/${event.target.value}`)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    //a const to increment page
    const incrementPage = () => {
        setPage(page + 1);
    }

    //a const to decrement page
    const decrementPage = () => {
        setPage(page - 1);
    }


    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>Location </TableCell>
                        <TableCell className={classes.tableHeaderCell}>Wind Directions</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Experience </TableCell>
                        <TableCell className={classes.tableHeaderCell}>Ok</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {locations?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.id} data={locations}>
                            <TableCell>
                                <Grid container>
                                    <Grid item lg={2}>
                                        <Avatar alt={row.locationname} src='.' className={classes.avatar} />
                                    </Grid>
                                    <Grid item lg={10}>
                                        <Typography className={classes.name}>{row.locationname}</Typography>
                                        <Input value={row.id} onClick={handleLocationClick} className={classes.idLink}></Input>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Typography color="primary" variant="subtitle2">{row.winddirections}</Typography>
                                {/* <Typography color="textSecondary" variant="body2">{row.company}</Typography> */}
                            </TableCell>
                            <TableCell>{row.experience}</TableCell>
                            <TableCell >
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

                                >{row.locationname}
                                </Typography>
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
                        backIconButtonProps={{
                            'aria-label': 'Previous Page',
                            onClick: decrementPage,
                        }}
                        nextIconButtonProps={{
                            'aria-label': 'Next Page',
                            onClick: incrementPage
                        }}
                    />
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default MyTable;