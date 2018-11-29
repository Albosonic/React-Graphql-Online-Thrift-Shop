import './my-store-root.scss';

import React from 'react';
import MyStore from '../my-store/my-store';
import {withRouter} from "react-router-dom";

import store from '../../redux/store';
import { connect } from "react-redux";

import StoreItemEditForm from '../store-item-edit-form/store-item-edit-form';

class MyStoreRoot extends React.Component {
  render() {
    let actionMode = store.getState().actionMode.storeItemActionMode
    if(!actionMode.storeItemActionMode) {
      return <MyStore/>
    } else {
      return <StoreItemEditForm/>
    }
  }
}

const mapStateToProps = state => ({ actionMode: state.actionMode });

export default connect(mapStateToProps)(MyStoreRoot);