import './my-store-root.scss';
import React from 'react';

import store from '../../redux/store';
import { connect } from "react-redux";

import MyStore from '../my-store/my-store';
import stores from '../mock-store-data';


import StoreItemEditForm from '../store-item-edit-form/store-item-edit-form';

class MyStoreRoot extends React.Component { //TODO: refactor this at some point
  render() {
    let actionMode = store.getState().actionMode.storeItemActionMode
    const view = 'my-store';
    if(!actionMode.storeItemActionMode) {
      return <MyStore storeData={ stores[0] } view={ view }/>
    } else {
      return <StoreItemEditForm/>
    }
  }
}

const mapStateToProps = state => ({ actionMode: state.actionMode });

export default connect(mapStateToProps)(MyStoreRoot);