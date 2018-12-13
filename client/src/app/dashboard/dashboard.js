import './dashboard.scss';

import React from "react";
import Activities from "../activities/activities";
import Feed from '../feed/feed';
import store from '../../redux/store'; store.getState().items
import {fetchFeed} from '../services/feed-service';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    
    fetchFeed()
  }

  render () {
    const feedView = 'side-bar';
    return (
      <div className="dashboard-container">
        {/* <Activities/> */}
        {/* <Feed feedView={ feedView }/> */}
      </div>
    )
  }
}

export default Dashboard;