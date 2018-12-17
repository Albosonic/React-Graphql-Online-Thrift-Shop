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
  UPDATE_CURRENT_CHAT,
  UPDATE_MY_STORE,
  UPDATE_ALL_STORES
}
from "../constants/action-types";
import store from "../store";

export const updateUserInfo = userInfo => (
  { type: UPDATE_USER_INFO, payload: userInfo }
);

export const updateMyStore = myStore => (
  { type: UPDATE_MY_STORE, paload: myStore }
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

export const addOneItem = storeItem => {
  let oneItem = {}
  oneItem[storeItem._id] = storeItem;
  return { type: ADD_ONE_ITEM, payload: oneItem }
}

export const updateAllItems = storeItems => (
  { type: UPDATE_ALL_ITEMS, payload: storeItems }
);

export const updateStoreFeed = allStores => (
  {type: UPDATE_ALL_STORE_FEED, payload: allStores}
);

export const updateCurrentShop = shop => {
  return { type: UPDATE_CURRENT_SHOP, payload: shop }
}

export const updateCurrentChat = chatMsg => {
  return { type: UPDATE_CURRENT_CHAT, payload: chatMsg }
}

export const updateOneMessage = storeItem => { // this can be simplified no using constant look up.    
  // change the messages update saytem to make a network request on message click.
  // Hold the messages in the chatter component state.
  // maybe do the same with items.
  const { allStores, myStore: { storeId } } = store.getState();
  var targetStore = allStores[storeItem.storeId];
  targetStore.storeItems[storeItem._id] = storeItem;
  store.dispatch(updateCurrentShop(targetStore));
  store.dispatch(updateCurrentChat(storeItem.messages));
  storeId === storeItem.storeId ? store.dispatch(updateMyStore(targetStore)) : null;
  storeId === storeItem.storeId ? store.dispatch(updateMyStore(targetStore)) : null;
  return { type: UPDATE_ALL_STORES, payload: allStores }
}

export const updateAllStores = allStores => {
  return { type: UPDATE_ALL_STORES, payload: allStores }
}


export const clearState = clearStateObj => (
  { type: CLEAR_STATE, payload: clearStateObj }
);