import
{
  ADD_ARTICLE,
  UPDATE_USER_INFO,
  TOGGLE_ACTION_MODE,
  UPDATE_STORE_DATA,
  UPDATE_STORE_NAME
}
from "../constants/action-types";

export const addArticle = article => (
    { type: ADD_ARTICLE, payload: article }
  );

export const updateUserInfo = userInfo => (
  { type: UPDATE_USER_INFO, payload: userInfo }
);

export const ToggleStoreItemActionMode = actionMode => (
  { type: TOGGLE_ACTION_MODE, payload: actionMode }
);

export const updateStoreData = storeData => (
  { type: UPDATE_STORE_DATA, payload: storeData }
)

export const updateStoreName = storeName => (
  { type: UPDATE_STORE_NAME, payload: storeName }
)

