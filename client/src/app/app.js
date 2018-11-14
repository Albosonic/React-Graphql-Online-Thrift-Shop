import React from 'react';
import ReactDOM from 'react-dom';

import RegForm from './forms/registration.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <RegForm></RegForm>
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'))