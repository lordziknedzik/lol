import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import {BrowserRouter} from 'react-router-dom';
import GlobalContextProvider from './contexts/Global.context';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)