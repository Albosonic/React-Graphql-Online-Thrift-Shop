import './my-store-root.scss';

import React from 'react';
import MyStore from '../my-store/my-store';

import store from '../../redux/store';
import { connect } from "react-redux";

import StoreItemEditForm from '../store-item-edit-form/store-item-edit-form';

class MyStoreRoot extends React.Component {
  render() {
    return <StoreItemEditForm/>
    // if(!store.getState().storeItemEditMode) {      
    //   return <MyStore/>
    // } else {
    //   return <StoreItemEditForm/>
    // }
  }
}

const mapStateToProps = state => ({ storeItemEditMode: state.storeItemEditMode });

export default connect(mapStateToProps)(MyStoreRoot);