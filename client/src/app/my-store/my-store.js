import './my-store.scss';
import React from 'react';
import StoreItem from '../shared-components/store-item/store-item';

import items from '../mock-items-data';
import AddItem from '../add-item/add-item';

class MyStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //should be a default img here i.e. store hero img.
      currentHeroImg: items[0].img
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(imageData) {
    this.setState({ currentHeroImg: imageData })
  }

  renderStoreItems() {
    const view = 'my-store';
    return items.map((item, i) => {
      return (
        <StoreItem
          key={ i }
          storeItem={ item }
          handleItemClick={ this.handleItemClick }
          length={ items.length }
          view={ view }
          index={ i } />
      )
    })
  }

  render() {
    return (                  
        <div className="store-view-container">
          <div className="hero-upload-container">
            <img className="hero" src={ this.state.currentHeroImg }></img>
          </div>
          <AddItem/>
          { this.renderStoreItems(items) }
        </div>      
    )
  }
}

export default MyStore;