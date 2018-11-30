import './my-store.scss';
import React from 'react';
import StoreItem from '../shared-components/store-item/store-item';
import { mockImg5 } from '../shared-components/mock-img-data-5';
import AddItem from '../add-item/add-item';
import store from '../../redux/store'; // testing =========

class MyStore extends React.Component {  
  constructor(props) {
    super(props);
    const { storeData } = this.props;
    this.state = {
      currentHeroImg: mockImg5, // default Img
    }
    // storeData.storeItems[0].img
    console.log('======>', store.getState()); // testing =========

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
      <div className="outer-container">
        <h1 className="store-title">Store Title</h1>
        <div className="store-view-container">
          { this.state.currentHeroImg && 
          <div className="hero-upload-container">
            <img className="hero" src={ this.state.currentHeroImg }></img>
          </div>}
          { view === 'my-store' && <AddItem/> }
          {/* { this.renderStoreItems(storeData.storeItems) } */}
        </div>
      </div>
    )
  }
}

export default MyStore;