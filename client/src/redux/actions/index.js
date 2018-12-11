import
{
  UPDATE_USER_INFO,
  TOGGLE_ACTION_MODE,
  UPDATE_STORE_DATA,
  UPDATE_STORE_NAME,
  CLEAR_STATE,
  STORE_ITEM_EDIT_MODE,
  ADD_ONE_ITEM,
  UPDATE_ALL_ITEMS,
  UPDATE_ALL_STORES_FEED,
  UPDATE_CURRENT_SHOP,
  UPDATE_ONE_MSG,
  UPDATE_CURRENT_MESSAGE
}
from "../constants/action-types";
import store from "../store";
// import store from "../store";

export const updateUserInfo = userInfo => (
  { type: UPDATE_USER_INFO, payload: userInfo }
);

export const toggleStoreItemActionMode = actionMode => (
  { type: TOGGLE_ACTION_MODE, payload: actionMode }
);

export const storeItemEditMode = editMode => (
  { type: STORE_ITEM_EDIT_MODE, payload: editMode }
);

export const updateStoreData = storeData => (
  { type: UPDATE_STORE_DATA, payload: storeData }
)

export const updateStoreName = storeName => (
  { type: UPDATE_STORE_NAME, payload: storeName }
);

export const addOneItem = storeItem => (
  { type: ADD_ONE_ITEM, payload: storeItem }
);

export const updateAllItems = storeItems => (
  { type: UPDATE_ALL_ITEMS, payload: storeItems }
);

export const updateStoreFeed = allStores => (
  {type: UPDATE_ALL_STORE_FEED, payload: allStores}
);

export const updateCurrentShop = shop => (
  { type: UPDATE_CURRENT_SHOP, payload: shop }
);

export const updateOneMessage = storeItem => {
  let updatedStoresList = store.getState().allStores.map(storeObj => {
    if(storeObj.userStore.storeId === storeItem.storeId) {
      let updatedStoreItems = storeObj.storeItems.map(item => {
        if(item._id === storeItem.itemId) {
          return storeItem;
        } else {
          return item;
        }
      })
      storeObj.storeItems = [ ...updatedStoreItems ];
      store.dispatch(updateCurrentShop(storeObj))      
      return storeObj;
    } else {
      return storeObj;
    }
  });
  return { type: UPDATE_ONE_MSG, payload: updatedStoresList }
}

export const updateAllStores = stores => {
  return { type: UPDATE_ALL_STORES_FEED, payload: stores }
}


export const clearState = clearStateObj => (
  { type: CLEAR_STATE, payload: clearStateObj }
);