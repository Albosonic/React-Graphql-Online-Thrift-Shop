import './store-item-edit-form.scss';

import React from 'react';
import store from '../../redux/store';

import DropImage from '../drop-image/drop-image';

import { types, subTypes } from './options';
import { ToggleStoreItemActionMode } from '../../redux/actions';
import { saveNewItem } from '../services/item-service';

class StoreItemEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      price: null,
      itemType: null,
      itemSubType: null,
      imgFileData: null,
      itemDescription: '',
      descriptionError: false,
      title: store.getState().actionMode.title.title
    };
    this.handleItemSubTypeChange = this.handleItemSubTypeChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.setDroppedImagesToState = this.setDroppedImagesToState.bind(this);
    this.handleItemTypeChange = this.handleItemTypeChange.bind(this);
    this.returnOptionHandler = this.returnOptionHandler.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.generateOptions = this.generateOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backToStore = this.backToStore.bind(this);
    console.log(store.getState())
  }

  handleItemTypeChange(e) {
    let value = e.target.value;
    this.setState({itemType: value});
    value ? this.setState({showSubTypes: true}) : this.setState({showSubTypes: false});
  }

  handleItemSubTypeChange(e) {
    let value = e.target.value;
    this.setState({itemSubType: value})
    value ? this.setState({showEditDescription: true}) : this.setState({showEditDescription: false});
  }

  handleDescriptionChange(e) {
    let value = e.target.value;
    value.length > 150 ? this.state.descriptionError = true : this.state.descriptionError = false;
    this.setState({itemDescription: e.target.value});
  }

  backToStore() {
    store.dispatch(ToggleStoreItemActionMode({ storeItemActionMode: false, title: '' }));
  }

  setDroppedImagesToState(imageData) {
    this.setState({imgFileData: [...imageData]});
  }

  generateOptions(options, optionType) {
    let titleFragment;
    const changeHandler = this.returnOptionHandler(optionType);
    if(optionType === 'secondary') titleFragment = 'sub';
    if(!Array.isArray(options)) {
      options = subTypes[0][options];
    }
    return (
      <label className="item-type-edit-container">
        Select item {titleFragment}type:
        <select className="item-type-selector" onChange={ changeHandler }>
          <option className="option" value="">--Please choose an option--</option>
          { options.map((type, i) => <option className="option" key={i} value={type}>{type}</option>) }
        </select>
      </label>
    )
  }

  returnOptionHandler(optionType) {
    return optionType === 'primary' ? this.handleItemTypeChange : this.handleItemSubTypeChange;
  }

  handlePriceChange(e) {
    this.setState({ price: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();    
    let item = { // this can be done dynamically using state.
      storeId: store.getState().userInfo[0].id,
      itemType: this.state.itemType,
      itemSubType: this.state.itemSubType,
      imgFileData: this.state.imgFileData,
      itemDescription: this.state.itemDescription,
      price: this.state.price,
    }    
    saveNewItem(item);
    store.dispatch(ToggleStoreItemActionMode({ storeItemActionMode: false, title: 'Edit Item' }))
  }

  render() {
    return (
      <div className="item-edit-form-container">
        <form className="item-edit-form" onSubmit={ this.handleSubmit }>
        <span className="back-button" onClick={ this.backToStore }>Back</span>
          <h1 className="title">{ this.state.title }</h1>
          { this.generateOptions(types, 'primary') }
          {
            this.state.showSubTypes &&
            this.generateOptions(this.state.itemType, 'secondary')
          }
          {
            this.state.showEditDescription &&
            <label className="description-edit-container">
              Enter a brief description:
              <textarea
                className="description"
                type="text"
                placeholder="Please enter a brief description."
                onChange={ this.handleDescriptionChange }/>
            </label>
          }
            <label className="price-container">
              Asking Price:
              <input
                className="price"
                type="text"
                name="price"
                placeholder="$0.00"
                onChange={ this.handlePriceChange }/>
            </label>
          {
            this.state.descriptionError &&
            <p className='description-error'>description must be less than 150 characters</p>
          }
          <DropImage setDroppedImagesToState={ this.setDroppedImagesToState }/>
          <input className="edit-submit" type='submit'/>
        </form>
      </div>
    )
  }
}

export default StoreItemEditForm