
import './App.css';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider } from 'react-query'
import { CssBaseline } from '@mui/material';
import React from 'react';
import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react"
import { createContext } from "react"
import { useIndexedDB } from "react-indexed-db"
import { BrowserRouter } from "react-router-dom"

const queryClient = new QueryClient()
const Application = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />

          <Login />


        </QueryClientProvider>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default Application;

