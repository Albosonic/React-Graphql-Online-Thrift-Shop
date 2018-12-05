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
  }

  handleItemTypeChange(e) { // can probably consolidate these
    let value = e.target.value;
    this.setState({itemType: value});
    if(value) {
      this.setState({showSubTypes: true});
    } else {
      this.setState({showSubTypes: false});
    }
  }

  handleItemSubTypeChange(e) { // can probably consolidate these
    let value = e.target.value;
    this.setState({itemSubType: value})
    if(value) {
      this.setState({showEditDescription: true});
    } else {
      this.setState({showEditDescription: false});
    }
  }

  handleDescriptionChange(e) {
    let value = e.target.value;
    if(value.length > 150) {
      this.state.descriptionError = true;
    } else {
      this.state.descriptionError = false;
    }
    this.setState({itemDescription: e.target.value});
  }

  backToStore() {
    store.dispatch(ToggleStoreItemActionMode({ storeItemActionMode: false, title: '' }));
  }

  setDroppedImagesToState(imageData) {
    console.log('iageData :', imageData);
    this.setState({imgFileData: [...imageData]});
    console.log('===>', this.state)
  }

  generateOptions(options, optionType) {
    let titleFragment;
    const changeHandler = this.returnOptionHandler(optionType);
    if(optionType === 'secondary') titleFragment = 'sub';
    if(!Array.isArray(options)) {
      options = subTypes[0][this.transformTypes(options)]; // refactor this not to need transform.
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
    if(optionType === 'primary') {
      return this.handleItemTypeChange
    } else {
      return this.handleItemSubTypeChange
    }
  }

  transformTypes(type) {
    let reg = new RegExp(type);
    if (reg.test('head wear')) type = 'head';
    if (reg.test('foot wear')) type = 'feet';
    return type;
  }

  handlePriceChange(e) {
    this.setState({ price: e.target.value });
  }

  handleSubmit(e) { // change this to the add new item component.
    e.preventDefault();
    let item = {
      storeId: store.getState().userInfo[0].id,
      itemType: this.state.itemType,
      itemSubType: this.state.itemSubType,
      imgFileData: this.state.imgFileData,
      itemDescription: this.state.itemDescription,
      price: this.state.price,
    }
    saveNewItem(item);
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
                placeholder="please enter a brief description"
                onChange={ this.handleDescriptionChange }/>
            </label>
          }
            <label className="price-container">
              Asking Price:
              <input 
                className="price" 
                type="text" 
                name="price"
                placeholder="0.00"
                onChange={ this.handlePriceChange }/>
            </label>
          {
            this.state.descriptionError &&
            <p className='description-error'>description must be less than 150 characters</p>
          }
          <DropImage setDroppedImagesToState={ this.setDroppedImagesToState }/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default StoreItemEditForm