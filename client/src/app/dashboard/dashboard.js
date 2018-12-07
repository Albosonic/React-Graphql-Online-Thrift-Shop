import './dashboard.scss';

import React from "react";
import Activities from "../activities/activities";
import items from '../mock-items-data';
import Feed from '../feed/feed';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    const message = 'fuck the world!!'
    function subscribeToTimer(cb) {

      socket.emit('sendMsg', message);

      socket.on('recieveMsg', timestamp => cb(null, timestamp));

    }
    subscribeToTimer((one, two) => {
      console.log('===>',two)
    })
  }

  render () {
    const feedView = 'side-bar';
    return (
      <div className="dashboard-container">
        <Activities storeItems={ items }/>
        <Feed feedView={ feedView }/>
      </div>
    )
  }
}

export default Dashboard;