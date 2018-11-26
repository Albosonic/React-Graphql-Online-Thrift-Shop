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
        <div className="description-container">
          <h4 className="description-title">Decription</h4>
          <p className="description">{ storeItem.description }</p>
        </div>
        <div className="edit-icon-container">
          <span className="edit-icon" onClick={ this.handleEditClick }></span>
        </div>
      </div>
    )
  }
}
export default StoreItem