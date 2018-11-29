import React from "react";
import Activities from "../activities/activities";
import items from '../mock-items-data';
import './dashboard.scss';

class Dashboard extends React.Component {
  render () {
    return (
      <div className="dashboard-container">        
        <Activities storeItems={ items }/>
      </div>
    )
  }
}

export default Dashboard;