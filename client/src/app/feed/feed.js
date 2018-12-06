import React from 'react';
import stores from '../mock-store-data';
import './feed.scss';
import MyStore from '../my-store/my-store';
import { fetchFeed } from '../services/feed-service';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: null,
      feedIn: false,
    }    
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

  renderStoresToFeed(feed) {
    const storeView = 'feed';    
    return feed.map((storeObj, i) => {
      if(storeObj.storeItems.length > 0) {
        return (
          <li className="store-container" key={ i }>
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
    return (
      <div className={`user-feed-container ${feedView}`}>
        <h1 className="feed-title">Feed</h1>
        { this.state.feedIn && this.renderStoresToFeed(this.state.feed) }
      </div>
    )
  }
}

export default Feed;