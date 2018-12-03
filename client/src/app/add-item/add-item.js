import React from 'react';
import store from '../../redux/store';
import { ToggleStoreItemActionMode, updateStoreData } from '../../redux/actions';
import './add-item.scss';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddItemClick = this.handleAddItemClick.bind(this);
  }
  
  handleAddItemClick(e) {
    store.dispatch(ToggleStoreItemActionMode({ storeItemActionMode: true, title: 'Add New Item' }));    
  }

  render() {
    return (
      <div className="add-item-container" onClick={ this.handleAddItemClick }>
        <span className="plus-icon"></span>
      </div>
    )
  }
}

export default AddItem;