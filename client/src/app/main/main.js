import './main.scss';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import RegForm from '../forms/registration';
import DashBoard from '../dashboard/dashboard';
import AccountSettings from '../account-settings/account-settings';
import MyStoreRoot from '../my-store-root/my-store-root';
// '/' temporarily takes user to dashboard.
const Main = () => (
    <div className="main-container">
      <Route exact path="/" render={() => <Redirect to="/dashboard"/>}/>
      <Route exact path='/login' component={ RegForm }/>
      <Route exact path='/dashboard' component={ DashBoard }/>
      <Route exact path='/account-settings' component={ AccountSettings }/>      
      <Route exact path='/my-store' component={ MyStoreRoot }/>      
    </div>
)

export default Main;