import React from "react";
import StoreItem from '../shared-components/store-item/store-item';
import './activities.scss'

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHeroImg: null
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(imageData) {    
    this.setState({ currentHeroImg: imageData })
  }

  renderStoreItems(items) {
    const view = 'activities'
    return items.map((item, i) => { // view should come from the url === maybe?
      return <StoreItem key={ i } storeItem={ item } handleItemClick={ this.handleItemClick } view={ view }/>
    })
  }

  render () {
    const storeItems = this.props.storeItems;
    return (
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
    )
  }
}

export default Activities;