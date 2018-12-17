import './feed.scss';
import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { updateCurrentShop } from '../../redux/actions';

import store from '../../redux/store';
import MyStore from '../my-store/my-store';
import { fetchFeed } from '../services/feed-service';


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      goShopping: false
    }
    this.handleStoreClick = this.handleStoreClick.bind(this);
    fetchFeed()
  }


  handleStoreClick(currentShop) {
    this.setState({ goShopping: true });
    store.dispatch(updateCurrentShop(currentShop))
  }

  renderStoresToFeed(feed) {
    const storeView = 'feed';
    return Object.keys(feed).map((key, i) => {
      let storeObj = feed[key]      
      if(Object.keys(storeObj.storeItems).length > 0) {
        return (
          <li onClick={ () => this.handleStoreClick(storeObj) } className="store-container" key={ i }>
            <MyStore
              className="store-component"
              userStore={ storeObj.userStore }
              storeItems={ storeObj.storeItems }
              view={ storeView }/>
          </li>
        )
      }
    })
  }

  render() {
    const { feedView, allStores } = this.props;    
    if(this.state.goShopping) return <Redirect to="/shop"/>;
    return (
      <div className={`user-feed-container ${feedView}`}>
        <h1 className="feed-title">Feed</h1>
        { this.renderStoresToFeed(allStores) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allStores: state.allStores
})

export default connect(mapStateToProps)(Feed);