
import './App.css';

import { AppContainer } from './contexts/App';
import React from 'react';

// import PropTypes from "prop-types"
// import { useEffect, useRef, useState } from "react"
// import { createContext } from "react"
// import { useIndexedDB } from "react-indexed-db"
// import { BrowserRouter } from "react-router-dom"
import { initDB } from "react-indexed-db"




import MiniDrawer from './components/MiniDrawer';
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

    <AppContainer>
      <MiniDrawer />
    </AppContainer>


  );
}

export default App;







