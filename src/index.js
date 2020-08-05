import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import GlobalStyles from './styles/GlobalStyles'
import { ToastContainer } from 'react-toastify'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);