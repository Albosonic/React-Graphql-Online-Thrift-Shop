import React from 'react';
import { render } from 'react-dom';
import { Provider }  from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom'
import store from '../redux/store/index';

import Main from './main/main';
import Header from './header/header';
import SideNav from './side-nav/side-nav';

import './app.scss'

const App = withRouter(({location}) => {  
  return (
    <div className="app-container">
      <Header></Header>
      <div className="body-container">
        { location.pathname !== '/login' && <SideNav/> }
        <Main></Main>
      </div>
   </div>     
  )
});

export default App;

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'))