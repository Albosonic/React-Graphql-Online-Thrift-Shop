import './shop.scss';
import React from 'react';
import MyStore from '../my-store/my-store';
import store from '../../redux/store';
import Feed from '../feed/feed';

const Shop = () => {
  const { userStore, storeItems } = store.getState().currentShop;
  console.log('whoo', storeItems)
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

export default Shop;