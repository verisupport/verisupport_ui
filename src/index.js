import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Register from './Register/Register.react';
import LoginPage from './LoginPage/LoginPage.react';

ReactDOM.render(
  <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>
  ,
  document.getElementById('root')
);
