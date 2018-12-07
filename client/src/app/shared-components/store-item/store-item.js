import React from 'react';
import PropTypes from 'prop-types';

import store from '../../../redux/store';
import { ToggleStoreItemActionMode, storeItemEditMode } from '../../../redux/actions';

import './store-item.scss';

class StoreItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.handleActionClick = this.handleActionClick.bind(this);
    const { view, storeItem } = this.props;
    this.handleMsgClick = this.handleMsgClick.bind(this);
  }

  handleActionClick(e) {
    store.dispatch(storeItemEditMode({
      storeItem: this.props.storeItem,
      storeItemActionMode: true,
      title: 'Edit Item',
    }))
  }

  handleMsgClick(e) {
    console.log(e.target)
  }

  render() {
    const { storeItem, handleItemClick, view } = this.props;
    let showMessageIcon = view === 'activities' || view === 'shop';
    return (
      <div className="item-container">
        <div className="left-container">
          <span className={ `thumbnail ${storeItem.itemSubType}` }></span>
          <div className="item-img-container">
            <p className="img-text">Image</p>
            <img className="item-img" src={ storeItem.imgFileData } onClick={ ()=> handleItemClick(storeItem.imgFileData  ) }/>
          </div>
        </div>
        <div className="description-container">
          <h4 className="description-title">Decription</h4>
          <p className="description">{ storeItem.itemDescription }</p>
        </div>
        <div className="edit-icon-container">
          { view === 'my-store' && <span className="edit-icon" onClick={ this.handleActionClick }></span> }
          { showMessageIcon && <span onClick={ this.handleMsgClick } className="messages-icon"></span> }
        </div>
      </div>
    )
  }
}

StoreItem.propTypes = {
  storeItem: PropTypes.object,
  handleItemClick: PropTypes.func
}

export default StoreItem