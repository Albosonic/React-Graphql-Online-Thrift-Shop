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
    return (
      <div className="item-container">
        <p className="store-item">{ storeItem }</p>
        <span className="edit-icon" onClick={ this.handleEditClick }>edit icon</span>
      </div>
    )
  }
}
export default StoreItem