/*
PROTEIN CURATION APP
VALERIA PATRICIA URBINA CASTILLO
PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ
EL PSY CONGROO
*/

import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import './index.css';
import App from './App';
// material UI
//import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//import {CssBaseline} from '@material-ui/core'
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/*Proveedor de los temas de los botones que ya puse */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
