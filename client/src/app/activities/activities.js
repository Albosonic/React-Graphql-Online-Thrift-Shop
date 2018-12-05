import React from "react";
import StoreItem from '../shared-components/store-item/store-item';
import './activities.scss'

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHeroImg: this.props.storeItems[0].img
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(imageData) {
    this.setState({ currentHeroImg: imageData })
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

export default Activities;