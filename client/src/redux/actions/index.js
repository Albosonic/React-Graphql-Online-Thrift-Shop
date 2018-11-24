import { ADD_ARTICLE, UPDATE_USER_INFO, TOGGLE_EDIT_MODE } from "../constants/action-types";


export const addArticle = article => (
    { type: ADD_ARTICLE, payload: article }
  );

export const updateUserInfo = userInfo => (  
  { type: UPDATE_USER_INFO, payload: userInfo }
);

export const ToggleStoreItemEditMode = editMode => (
  { type: TOGGLE_EDIT_MODE, payload: editMode }
);
