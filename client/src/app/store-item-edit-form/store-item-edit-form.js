import React from 'react';
import { types, subTypes } from './options';

import './store-item-edit-form.scss';

class StoreItemEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemType: null,
      itemSubType: null,
      itemDescription: '',
      hide: false
    };
    this.dropArea = React.createRef();
    this.handleItemTypeChange = this.handleItemTypeChange.bind(this);
    this.handleItemSubTypeChange = this.handleItemSubTypeChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.generateOptions = this.generateOptions.bind(this);
    this.addDropEvents = this.addDropEvents.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnOptionHandler = this.returnOptionHandler.bind(this);
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
    console.log('=====');
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
          <option value="">--Please choose an option--</option>
          { options.map((type, i) => <option key={i} value={type}>{type}</option>) }
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

  handleSubmit(e) {
    e.preventDefault();    
  }

  addDropEvents() { // image uploader  should be it's own component ==!!!==
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      this.dropArea.addEventListener(eventName, preventDefaults, false)
    })
  }

  render() {
    return (
      <div className="item-edit-form-container">
        <form className="item-edit-form" onSubmit={ this.handleSubmit }>
          <h1 className="title">Store Item Edit</h1>
          { this.generateOptions(types, 'primary') }
          { this.state.showSubTypes && this.generateOptions(this.state.itemType, 'secondary') }
          {  this.state.showEditDescription &&
          <label className="description-edit-container">
              Enter a brief description:
              <textarea 
                className="description" 
                type="text" 
                placeholder="please enter a brief description" 
                onChange={ this.handleDescriptionChange }/> 
          </label> }
          <div ref={ this.dropArea } className="drop-area">
            <input type="file" id="file-elem" multiple accept="image/*"></input>
            <label class="button" for="fileElem">drag and drop img files here.</label>
          </div>
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

// const mapStateToProps = state => ({ storeItemEditMode: state.storeItemEditMode });

export default StoreItemEditForm