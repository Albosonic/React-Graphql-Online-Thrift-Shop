import './my-store.scss';
import React from 'react';
import StoreItem from '../shared-components/store-item/store-item';
import { mockImg5 } from '../shared-components/mock-img-data-5';
import AddItem from '../add-item/add-item';
import store from '../../redux/store';
import { updateStoreName } from '../../redux/actions';

class MyStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultStoreName: 'Add Your Store Name',
      titleAddedClass: 'no-title-added',
      currentHeroImg: mockImg5, // default Img find a better one.
      imgFileData: [],
      editStoreName: false
    }
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleStoreNameClick = this.handleStoreNameClick.bind(this);
    this.handleStoreNameEdit = this.handleStoreNameEdit.bind(this);
    this.handleStoreNameSubmit = this.handleStoreNameSubmit.bind(this);
  }

  handleItemClick(imageData) {
    this.setState({ currentHeroImg: imageData[0] });
    this.setState({imgFileData: [...imageData]});
  }

  renderStoreItems(items) {    
    if(items.length >  0) {
      return items.map((item, i) => {
        return (
          <StoreItem
            key={ i }
            storeItem={ item }
            handleItemClick={ this.handleItemClick }
            length={ items.length }
            view={ this.props.view }
            index={ i } />
        )
      })
    }
  }

  handleStoreNameClick(e) {
    this.setState({ editStoreName: true });
  }

  handleStoreNameEdit(e) {
    this.setState({ storeName: e.target.value });
  }
  handleStoreNameSubmit(e) {
    e.preventDefault();
    store.dispatch(updateStoreName(e.target.storename.value)); // nedds its own service function.
    this.setState({ editStoreName: false });
  }

  render() {
    const { view } = this.props;
    const { storeName } = store.getState().myStore;
    const { items } = store.getState();    
    
    return (
      <div className="outer-container">
        <h1
          onClick={ this.handleStoreNameClick }
          className={`store-title ${ view }`}>
          { storeName || this.state.defaultStoreName }
        </h1>
        { this.state.editStoreName &&
        <form onSubmit={ this.handleStoreNameSubmit }>
          <input
            name="storename"
            className="store-name-edit"
            onChange={ this.handleStoreNameEdit }
            placeholder="edit store name"
            type="text"/>
        </form>
        }
        <div className="store-view-container">
          { this.state.currentHeroImg &&
          <div className="hero-upload-container">
            <img className="hero" src={ this.state.currentHeroImg }></img>
          </div>}
          { view === 'my-store' && <AddItem/> }
          { this.renderStoreItems(items) }
        </div>
      </div>
    )
  }
}

export default MyStore;