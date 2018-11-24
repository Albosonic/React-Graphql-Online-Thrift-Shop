import React from 'react';
import './my-store.scss';
import StoreItem from '../shared-components/store-item/store-item';

const items = [{id: 0, type: 'dress'}, {id: 1, type: 'shirt'}, {id: 2, type: 'pants'}, {id: 3, type: 'shoes'}];

class MyStore extends React.Component {
  renderStoreItems() {
    return items.map((item, i) => {
      return <StoreItem key={i} storeItem={item.type}/>
    })
  }

  render() {
    return (
      <div className="my-store-container">
        <div className="store-view-container">
          <div className="hero-upload-container">
            <span className="hero"></span>
          </div>
          {this.renderStoreItems()}
        </div>
      </div>
    )
  }
}

export default MyStore;