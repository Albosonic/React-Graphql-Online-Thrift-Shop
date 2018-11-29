import './my-store.scss';
import React from 'react';
import StoreItem from '../shared-components/store-item/store-item';

import AddItem from '../add-item/add-item';

class MyStore extends React.Component {
  constructor(props) {
    super(props);
    const { storeData } = this.props;
    this.state = {
      currentHeroImg: storeData.storeItems[0].img,
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(imageData) {
    this.setState({ currentHeroImg: imageData })
  }

  renderStoreItems(items) {
    return items.map((item, i) => {
      return (
        <StoreItem
          key={ i }
          storeItem={ item }
          handleItemClick={ this.handleItemClick }
          length={ items.length }
          view={ this.props.view }
          index={ i } />
      )
    })
  }

  render() {
    const { storeData, view } = this.props;
    return (
        <div className="store-view-container">
          <div className="hero-upload-container">
            <img className="hero" src={ this.state.currentHeroImg }></img>
          </div>
          { view === 'my-store' && <AddItem/> }
          { this.renderStoreItems(storeData.storeItems) }
        </div>
    )
  }
}

export default MyStore;