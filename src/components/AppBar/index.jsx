import { AppBar } from "@mui/material";
import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <AppBar>

            <Link to="/">Login</Link>
            <Link to="/locations">Locations</Link>

        </AppBar>
    )
}
