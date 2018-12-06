import './store-item-edit-form.scss';
import { subTypes } from './options';

import React from 'react';
import { connect } from "react-redux";
import store from '../../redux/store';
import { ToggleStoreItemActionMode } from '../../redux/actions';

import { saveNewItem, persistItemEdit } from '../services/item-service';

import DropImage from '../drop-image/drop-image';

class StoreItemEditForm extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.itemEditContent) { // TODO: map all this state in root, and pass each individually, then this can be cleaned up.
      const { title, itemEditContent: { price, itemType, itemSubType, imgFileData, itemDescription } } = this.props;
      this.state = {
        hide: false,
        price: price,
        itemType: itemType,
        itemSubType: itemSubType,
        imgFileData: imgFileData,
        itemDescription: itemDescription,
        showEditDescription: true,
        descriptionError: false,
        showSubTypes: true,
        title: title
      };
    } else {
      this.state = {
        hide: false,
        price: null,
        itemType: null,
        itemSubType: null,
        imgFileData: null,
        itemDescription: '',
        descriptionError: false,
        title: this.props.title
      };
    }
    this.handleItemSubTypeChange = this.handleItemSubTypeChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.setDroppedImagesToState = this.setDroppedImagesToState.bind(this);
    this.handleItemTypeChange = this.handleItemTypeChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.generateOptions = this.generateOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backToStore = this.backToStore.bind(this);
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

  generateOptions(options) {
    options = subTypes[0][options];
    return (
      <label className="item-type-edit-container">
        Select item subtype:
        <select className="item-type-selector" value={ this.state.itemSubType || ""} onChange={ this.handleItemSubTypeChange }>
          <option className="option" value="">--Please choose an option--</option>
          { options.map((type, i) => {
              return <option className="option" key={i} value={type}>{type}</option>;
            })
          }
        </select>
      </label>
    )
  }

  handlePriceChange(e) {
    this.setState({ price: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const editMode = 'Edit Item';
    let item = {      
      storeId: store.getState().userInfo[0].id,
      itemType: this.state.itemType,
      itemSubType: this.state.itemSubType,
      imgFileData: this.state.imgFileData,
      itemDescription: this.state.itemDescription,
      price: this.state.price,
    }
    if(this.state.title === editMode) {
      item._id = this.props.itemEditContent._id,
      persistItemEdit(item);
      store.dispatch(ToggleStoreItemActionMode({ storeItemActionMode: false, title: 'Edit Item' }))
    } else {
      saveNewItem(item);
      store.dispatch(ToggleStoreItemActionMode({ storeItemActionMode: false, title: 'Edit Item' }))
    }
  }

  render() {
    const optionTypes = ['tops', 'bottoms', 'head', 'feet'];
    return (
      <div className="item-edit-form-container">
        <form className="item-edit-form" onSubmit={ this.handleSubmit }>
        <span className="back-button" onClick={ this.backToStore }>Back</span>
          <h1 className="title">{ this.state.title }</h1>
          <label className="item-type-edit-container">
            Select item type:
            <select className="item-type-selector" value={ this.state.itemType || "" } onChange={ this.handleItemTypeChange }>
              <option className="option" value="">--Please choose an option--</option>
              { optionTypes.map((type, i) => <option className="option" key={i} value={type}>{type}</option>) }
            </select>
          </label>
          { this.state.showSubTypes && this.generateOptions(this.state.itemType) }
          {
            this.state.showEditDescription &&
            <label className="description-edit-container">
              Enter a brief description:
              <textarea
                className="description"
                type="text"
                placeholder="Please enter a brief description."
                onChange={ this.handleDescriptionChange }
                value={ this.state.itemDescription }
                />
            </label>
          }
            <label className="price-container">
              Asking Price:
              <input
                className="price"
                type="text"
                name="price"
                placeholder="$0.00"
                value={ this.state.price || "" }
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

const mapStateToProps = state => ({
  itemEditContent: state.actionMode.itemEditContent,
  title: state.actionMode.title
})

export default connect(mapStateToProps)(StoreItemEditForm)