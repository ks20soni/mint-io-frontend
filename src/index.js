import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";


import { Provider } from "react-redux";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from "./Components/LandingPage/LandingPage";
import SignUp from './Components/SignInUp/SignUp';
import SignIn from "./Components/SignInUp/SignIn";

import { ConfigureStore } from "./Redux/ConfigureStore";
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import TimeAgo from 'javascript-time-ago'
import store from './app/store';

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(en)

// const store = ConfigureStore();


ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={globalMUITheme}> */}
      <Provider store={store}>
          <App />
      </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
