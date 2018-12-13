import './activities.scss';

import React from "react";
import { connect } from "react-redux";

import StoreItem from '../shared-components/store-item/store-item';

class Activities extends React.Component {
  constructor(props) {
    super(props);
    const storeItems = this.props.storeItems;
    this.state = {
      currentHeroImg: storeItems[0].imgFileData[0] || null
    };
    this.handleItemClick = this.handleItemClick.bind(this);    
  }

  handleItemClick(imageData) {
    console.log('who =========')
    // this.setState({ currentHeroImg: imageData })
  }

  renderStoreItems(items) {
    const view = 'activities'
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

  render () {
    const storeItems = this.props.storeItems;
    
    return (
      <div className="activities-page-container">
        <div className="activities-title-container">
          <h1 className="activities-title">Activities</h1>
        </div>
        <div className="activities-container">
          <div className="hero-container">
            {
              this.state.currentHeroImg &&
              <img className="hero" src={ this.state.currentHeroImg }></img>
            }
          </div>
          <div className="activity-items-container">
            { this.renderStoreItems(storeItems) }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  myStore: state.myStore,
  storeItems: state.items,
})


export default connect(mapStateToProps)(Activities);