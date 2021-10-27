import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { QueryClientProvider, QueryClient } from 'react-query';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';


const queryClient = new QueryClient({
  defaultOptions: {
    refetchOnWindowFocus: false,
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: (failureCount, error) => {
        if (
          error &&
          error & error.hasOwnProperty("response") &&
          error.response.hasOwnProperty("status")
        ) {
          return error.response.status >= 500
        } else {
          return false
        }
      },
    },
  },
})

const Application = (
  <BrowserRouter
    basename={process.env.NODE_ENV !== "dev" ? "" : "/production"}
  >

    <CssBaseline />
    <QueryClientProvider client={queryClient}>

      <App />


      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>

  </BrowserRouter>
)

ReactDOM.render(
  Application,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
