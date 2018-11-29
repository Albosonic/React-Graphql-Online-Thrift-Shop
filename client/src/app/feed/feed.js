import React from 'react';
import stores from '../mock-store-data';
import './feed.scss';
import MyStore from '../my-store/my-store';

class Feed extends React.Component {
  constructor(props) {
    super(props);    
    this.renderStoresToFeed = this.renderStoresToFeed.bind(this);
  }

  renderStoresToFeed() {
    const view = 'feed';
    return stores.map((store, i) => {
      return <li className="store-container" key={ i }><MyStore className="store-component" storeData={ store } view={ view }/></li>;
    });
  }

  render() {
    const { stores } = this.props;
    return (
      <div>
        { this.renderStoresToFeed(stores) }
      </div>
    )
  }
}

export default Feed;