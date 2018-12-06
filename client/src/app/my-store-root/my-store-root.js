import './my-store-root.scss';
import React from 'react';

import { connect } from "react-redux";

import MyStore from '../my-store/my-store';
import StoreItemEditForm from '../store-item-edit-form/store-item-edit-form';
import Feed from '../feed/feed';

class MyStoreRoot extends React.Component { //TODO: refactor this at some point
  constructor(props) {
    super(props);
  }
  render() {
    const { actionMode, storeData, storeItems } = this.props;
    const view = 'my-store';
    const feedView = 'side-bar'
    if(!actionMode.storeItemActionMode) {//TODO, this will need to come from the redux store.
      return (
        <div className="my-store-page-container">
          <MyStore
            storeData={ storeData }
            storeItems={ storeItems }
            view={ view }/>
          <Feed feedView={ feedView }/>
        </div>
      )
    } else {
       return <StoreItemEditForm/>
    }
  }
}

const mapStateToProps = state => ({
  actionMode: state.actionMode,
  storeData: state.myStore,
  storeItems: state.items,
});

export default connect(mapStateToProps)(MyStoreRoot);