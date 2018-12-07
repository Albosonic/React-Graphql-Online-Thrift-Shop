import './dashboard.scss';

import React from "react";
import Activities from "../activities/activities";
import Feed from '../feed/feed';
import store from '../../redux/store'; store.getState().items

import storeItems from '../mock-items-data'; // this is temporary.

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const feedView = 'side-bar';
    return (
      <div className="dashboard-container">
        <Activities storeItems={ store.getState().items }/>
        <Feed feedView={ feedView }/>
      </div>
    )
  }
}

export default Dashboard;