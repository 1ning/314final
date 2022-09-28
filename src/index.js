import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {  ArticleProvider } from './context/articles.context';
import {  ArticlepostProvider } from './context/articles.post';
import {  UserProvider } from './context/user.context';
import {ControlProvider} from './context/control.context'
ReactDOM.render(
  <BrowserRouter> 
    <ArticlepostProvider>
      <ControlProvider>
  <ArticleProvider>
  <UserProvider>
  < App/>
  </UserProvider>
  </ArticleProvider>
  </ControlProvider>
  </ArticlepostProvider>
  </BrowserRouter>,
  document.getElementById('root')
);