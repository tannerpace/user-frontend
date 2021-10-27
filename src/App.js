
import './App.css';
import Login from './pages/Login';
import { AppContainer } from './contexts/App';
import React from 'react';
// import PropTypes from "prop-types"
// import { useEffect, useRef, useState } from "react"
// import { createContext } from "react"
// import { useIndexedDB } from "react-indexed-db"
// import { BrowserRouter } from "react-router-dom"
import { initDB } from "react-indexed-db"
import { BrowserRouter } from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import LocationsList from "./components/LocationsList"
import Nav from "./components/AppBar"


initDB({
  name: "UserApp",
  version: 1,
  objectStoresMeta: [
    {
      store: "auth",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "token", keypath: "token" },
        { name: "account", keypath: "account" },
      ],
    },
  ],
})







const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/locations">
            <LocationsList />
          </Route>
        </Switch>
      </AppContainer>
    </BrowserRouter>

  );
}

export default App;







