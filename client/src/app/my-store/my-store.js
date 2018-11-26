import React from 'react';
import './my-store.scss';
import StoreItem from '../shared-components/store-item/store-item';
import { tempImg3 } from '../shared-components/mock-img-data';
import { tempImg4 } from '../shared-components/mock-img-data4';

// const items = [{id: 0, type: 'dress'}, {id: 1, type: 'shirt'}, {id: 2, type: 'pants'}, {id: 3, type: 'shoes'}];
const items = [
  {id: 0, type: 'dress', img: tempImg3, description: 'my fun luis vaton dress is the rockinist thing you\'d ever wear, my fun luis vaton dress is the rockinist thing you\'d ever wear'},
  {id: 1, type: 'dress', img: tempImg4, description: 'my fun luis vaton dress is the rockinist thing you\'d ever wear, my fun luis vaton dress is the rockinist thing you\'d ever wear'},
  {id: 0, type: 'dress', img: tempImg3, description: 'my fun luis vaton dress is the rockinist thing you\'d ever wear, my fun luis vaton dress is the rockinist thing you\'d ever wear'},
  {id: 1, type: 'dress', img: tempImg4, description: 'my fun luis vaton dress is the rockinist thing you\'d ever wear, my fun luis vaton dress is the rockinist thing you\'d ever wear'},
  {id: 0, type: 'dress', img: tempImg3, description: 'my fun luis vaton dress is the rockinist thing you\'d ever wear, my fun luis vaton dress is the rockinist thing you\'d ever wear'},
  {id: 1, type: 'dress', img: tempImg4, description: 'my fun luis vaton dress is the rockinist thing you\'d ever wear, my fun luis vaton dress is the rockinist thing you\'d ever wear'},  
];
class MyStore extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = { //should be a default img here i.e. store hero img.
      currentHeroImg: null
    }    
  }

  handleItemClick(imageData) {
    console.log('===>', imageData);
    this.setState({ currentHeroImg: imageData })
  }

  renderStoreItems() {
    return items.map((item, i) => {
      return <StoreItem key={ i } storeItem={ item } handleItemClick={ this.handleItemClick }/>
    })
  }


  render() {
    return (
      <div className="my-store-container">
        <div className="store-view-container">
          <div className="hero-upload-container">          
            {
              this.state.currentHeroImg &&
              <img className="hero" src={ this.state.currentHeroImg }></img>
            }
          </div>
          { this.renderStoreItems() }
        </div>
      </div>
    )
  }
}

export default MyStore;