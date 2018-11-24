import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RegForm from '../forms/registration';
import DashBoard from '../dashboard/dashboard';
import AccountSettings from '../account-settings/account-settings';
import MyStoreRoot from '../my-store-root/my-store-root';

const Main = () => (
    <div>
      <Route exact path='/login' component={ RegForm }/>
      <Route exact path='/dashboard' component={ DashBoard }/>
      <Route exact path='/account-settings' component={ AccountSettings }/>      
      <Route exact path='/my-store' component={ MyStoreRoot }/>      
    </div>
)

export default Main;