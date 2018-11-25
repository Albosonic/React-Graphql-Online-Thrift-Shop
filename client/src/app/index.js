import React from 'react';
import { render } from 'react-dom';
import { Provider }  from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import store from '../redux/store/index';

import Main from './main/main';
import Header from './header/header';

import './app.scss'

const App = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <Main></Main>
   </div>     
  )
}

export default App;

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'))