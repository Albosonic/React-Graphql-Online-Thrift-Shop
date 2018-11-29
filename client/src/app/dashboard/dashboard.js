import React from "react";
import Activities from "../activities/activities";
import items from '../mock-items-data';
import Feed from '../feed/feed';
import './dashboard.scss';

class Dashboard extends React.Component {
  render () {
    return (      
      <div className="dashboard-container">
        <Activities storeItems={ items }/>
        <Feed/>
      </div>      
    )
  }
}

export default Dashboard;