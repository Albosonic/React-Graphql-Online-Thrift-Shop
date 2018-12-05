import './my-store-root.scss';
import React from 'react';

import store from '../../redux/store';
import { connect } from "react-redux";

import MyStore from '../my-store/my-store';
import stores from '../mock-store-data';


import StoreItemEditForm from '../store-item-edit-form/store-item-edit-form';
import Feed from '../feed/feed';

class MyStoreRoot extends React.Component { //TODO: refactor this at some point
  render() {

    const { actionMode, storeData, storeItems } = this.props;    
    const view = 'my-store';
    if(!actionMode.storeItemActionMode) {//TODO, this will need to come from the redux store.
      return (
        <div className="my-store-page-container">
          <MyStore
            storeData={ storeData }
            storeItems={ storeItems }            
            view={ view }/>
          <Feed/>
        </div>
      )
    } else {
      return <StoreItemEditForm/>
    }
  }
}

const mapStateToProps = state => ({
    actionMode: state.actionMode.storeItemActionMode,
    storeData: state.myStore,
    storeItems: state.items
  });

export default connect(mapStateToProps)(MyStoreRoot);