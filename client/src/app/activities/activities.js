import './activities.scss';

import React from "react";
import { connect } from "react-redux";

import StoreItem from '../shared-components/store-item/store-item';
import store from '../../redux/store';

class Activities extends React.Component {
  constructor(props) {
    super(props);
    const { storeId } = this.props;
    this.state = {
      // currentHeroImg: storeItems[0].imgFileData[0] || null
      // myStore: store.getState().allStores[storeId]
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(imageData) {
    // this.setState({ currentHeroImg: imageData })
  }

  renderStoreItems(items) {
    const view = 'activities'
    if(items) {
      const keys = Object.keys(items);
      return keys.map((key, i) => {
        const item = items[key];
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
  }

  render () {
    const { userStore, storeItems } = this.props;
    console.log('props ====', storeItems)
    console.log('storeItems ====', userStore)
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

// const mapStateToProps = state => ({
//   myStore: state.myStore,
// })

export default Activities;
// export default connect(mapStateToProps)(Activities);