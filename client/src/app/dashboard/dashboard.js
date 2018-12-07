import './dashboard.scss';

import React from "react";
import Activities from "../activities/activities";
import items from '../mock-items-data';
import Feed from '../feed/feed';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
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