import './dashboard.scss';

import React from "react";
import { connect } from "react-redux";
import Activities from "../activities/activities";
import Feed from '../feed/feed';
import store from '../../redux/store';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const feedView = 'side-bar';
    const { userStore, storeItems } = this.props;
    return (
      <div className="dashboard-container">
        <Activities userStore={ userStore } storeItems={ storeItems } />
        <Feed feedView={ feedView }/>
      </div>
    )
  } 
}

const mapStateToProps = state => ({  
  userStore: state.myStore,
  storeItems: state.myStore.items
})

export default connect(mapStateToProps)(Dashboard);