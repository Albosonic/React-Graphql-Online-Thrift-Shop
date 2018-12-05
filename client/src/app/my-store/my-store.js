import './my-store.scss';
import React from 'react';
import StoreItem from '../shared-components/store-item/store-item';
import { mockImg5 } from '../shared-components/mock-img-data-5';
import AddItem from '../add-item/add-item';
import store from '../../redux/store';
import { persistStoreName } from '../services/store-service';

class MyStore extends React.Component {
  constructor(props) {
    super(props);
    const { storeData, storeItems } = this.props;
    this.state = {
      defaultStoreName: 'Add Your Store Name',
      storeName: storeData.storeName, //TODO: fix this and have a default.
      titleAddedClass: 'no-title-added',
      currentHeroImg: mockImg5, // default Img find a better one.
      imgFileData: [],
      editStoreName: false,
      items: [...storeItems],
    }    
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleStoreNameClick = this.handleStoreNameClick.bind(this);
    this.handleStoreNameEdit = this.handleStoreNameEdit.bind(this);
    this.handleStoreNameSubmit = this.handleStoreNameSubmit.bind(this);
  }

  handleItemClick(imageData) {
    this.setState({ currentHeroImg: imageData[0] });
    this.setState({ imgFileData: [...imageData] });
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
    persistStoreName({ storeName: this.state.storeName, storeId: store.getState().myStore.storeId });
    this.setState({ editStoreName: false });
  }

  render() {
    const { view } = this.props;
    return (
      <div className={`outer-container ${view}`}>
        <h1
          onClick={ this.handleStoreNameClick }
          className={`store-title ${ view }`}>
          { this.state.storeName || this.state.defaultStoreName }
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
          { this.renderStoreItems(this.state.items) }
        </div>
      </div>
    )
  }
}

export default MyStore;