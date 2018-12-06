import
{
  UPDATE_USER_INFO,
  TOGGLE_ACTION_MODE,
  UPDATE_STORE_DATA,
  UPDATE_STORE_NAME,
  UPDATE_ITEMS,
  CLEAR_STATE,
  STORE_ITEM_EDIT_MODE
}
from "../constants/action-types";

export const updateUserInfo = userInfo => (
  { type: UPDATE_USER_INFO, payload: userInfo }
);

export const ToggleStoreItemActionMode = actionMode => (
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

export const updateStoreItems = storeItems => (
  { type: UPDATE_ITEMS, payload: storeItems }
);

export const clearState = clearStateObj => (
  { type: CLEAR_STATE, payload: clearStateObj }
);



