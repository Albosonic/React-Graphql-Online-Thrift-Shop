import './feed.scss';
import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { updateCurrentShop } from '../../redux/actions';

import store from '../../redux/store';
import MyStore from '../my-store/my-store';


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.allStores,
      goShopping: false
    }
    this.handleStoreClick = this.handleStoreClick.bind(this);    
  }


  handleStoreClick(currentShop) {
    this.setState({ goShopping: true });
    store.dispatch(updateCurrentShop(currentShop))
  }

  renderStoresToFeed(feed) {
    const storeView = 'feed';
    console.log('====sary', feed)
    return feed.map((storeObj, i) => {
      if(storeObj.storeItems.length > 0) {
        return (
          <li onClick={ () => this.handleStoreClick(storeObj) } className="store-container" key={ i }>
            <MyStore
              className="store-component"
              storeData={ storeObj.userStore }
              storeItems={ storeObj.storeItems }
              view={ storeView }/>
          </li>
        );
      }
    });
  }

  render() {
    const { feedView } = this.props;
    if(this.state.goShopping) return <Redirect to="/shop"/>;
    return (
      <div className={`user-feed-container ${feedView}`}>
        <h1 className="feed-title">Feed</h1>
        { this.renderStoresToFeed(this.state.feed) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allStores: state.allStores
})

export default connect(mapStateToProps)(Feed);