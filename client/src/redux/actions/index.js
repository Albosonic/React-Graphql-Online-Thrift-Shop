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
  UPDATE_ALL_STORE_FEED,
  UPDATE_CURRENT_SHOP
}
from "../constants/action-types";

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

export const clearState = clearStateObj => (
  { type: CLEAR_STATE, payload: clearStateObj }
);