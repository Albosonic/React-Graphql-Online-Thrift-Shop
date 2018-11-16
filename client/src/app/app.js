import React from 'react';
import { render } from 'react-dom';
import { Provider }  from 'react-redux';
import store from '../redux/store/index';

import RegForm from './forms/Registration';
import List from './lists/list';

const App = () => {
  return (
    <div>
      <RegForm></RegForm>
      <List></List>
   </div>     
  )
}

export default App;

render(<Provider store={store}><App/></Provider>, document.getElementById('app'))