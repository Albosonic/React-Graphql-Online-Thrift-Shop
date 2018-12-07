import React from 'react';
import { Link, Redirect } from "react-router-dom";
import './feed.scss';
import MyStore from '../my-store/my-store';
import { fetchFeed } from '../services/feed-service';
import store from '../../redux/store';
import { updateCurrentShop } from '../../redux/actions';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: null,
      feedIn: false,
      goShopping: false
    }
    this.handleStoreClick = this.handleStoreClick.bind(this);
    this.setFeedToState();
  }

  setFeedToState() {
    fetchFeed().then(feedObj => {
      this.setState({
        feed: feedObj.data,
        feedIn: true
      })
    })
  }

  handleStoreClick(currentShop) {    
    this.setState({ goShopping: true });
    store.dispatch(updateCurrentShop(currentShop))
  }

  renderStoresToFeed(feed) {
    const storeView = 'feed';
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
        { this.state.feedIn && this.renderStoresToFeed(this.state.feed) }
      </div>
    )
  }
}

export default Feed;