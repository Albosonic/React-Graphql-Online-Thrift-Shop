import './shop.scss';
import React from 'react';
import store from '../../redux/store';
import { connect } from "react-redux";
import MyStore from '../my-store/my-store';
import Feed from '../feed/feed';

const Shop = ({ userStore, storeItems }) => {
  const shopView = "shop";  
  return (
    <div className="shop-container">
      <div className="shop-body-container">
        <h1>Shop</h1>
        <MyStore storeData={ userStore } storeItems={ storeItems } view={ shopView }/>
      </div>
      <Feed/>
    </div>
  );
}

const mapStateToProps = state => ({
  userStore: state.currentShop.userStore,
  storeItems: state.currentShop.storeItems
})

export default connect(mapStateToProps)(Shop);