import React from 'react';
import './store-item.scss';
import store from '../../../redux/store';
import { ToggleStoreItemEditMode } from '../../../redux/actions';

class StoreItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemEdit: false
    };
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick() {
    store.dispatch(ToggleStoreItemEditMode(!this.state.itemEdit))
  }

  render() {
    const { storeItem } = this.props;
    const { handleItemClick } = this.props;
    return (
      <div className="item-container">
        <div className="left-container">
          <span className={ storeItem.type }></span>
          <div className="item-img-container">
            <p className="img-text">Image</p>
            <img className="item-img" src={ storeItem.img } onClick={ ()=> handleItemClick(storeItem.img) }/>
          </div>
        </div>
        <span className="edit-icon" onClick={ this.handleEditClick }></span>
      </div>
    )
  }
}
export default StoreItem