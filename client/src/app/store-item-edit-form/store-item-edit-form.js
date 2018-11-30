import React from 'react';
import { types, subTypes } from './options';

import './store-item-edit-form.scss';
import DropImage from '../drop-image/drop-image';
import store from '../../redux/store';
import { ToggleStoreItemActionMode, updateStoreData } from '../../redux/actions';

class StoreItemEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
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
    this.setState({imgFileData: [...imageData]})
  }

  generateOptions(options, optionType) {
    let titleFragment;
    const changeHandler = this.returnOptionHandler(optionType);
    if(optionType === 'secondary') titleFragment = 'sub';
    if(!Array.isArray(options)) {
      options = subTypes[0][this.transformTypes(options)];
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

  // descriptionError: false
  // hide: false
  // imgFileData: ["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…yCQB60JycGmvw49jSAcc+x+tOycAZFKy5zzim5x71Qj//2Q=="]
  // itemDescription: "hi there mutha fiunke"
  // itemSubType: "hats"
  // itemType: "head wear"
  // showEditDescription: true
  // showSubTypes: true
  // title: "Add New Item"

  handleSubmit(e) {
    e.preventDefault();    
    let storeObj = {
      id: store.getState().userInfo[0].id,
      item: [{
        itemType: this.state.itemType,
        itemSubType: this.state.itemSubType,
        itemDescription: this.state.itemDescription,
        imgFileData: this.state.imgFileData
      }]
    }
    store.dispatch(updateStoreData(storeObj));
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