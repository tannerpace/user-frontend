
import './App.css';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider } from 'react-query'
import { CssBaseline } from '@mui/material';
import React from 'react';


const queryClient = new QueryClient()
function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />

        <Login />


      </QueryClientProvider>
    </React.Fragment>

  );
}

export default App;

