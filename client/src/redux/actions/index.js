import { ADD_ARTICLE } from "../constants/action-types";
import { UPDATE_USER_INFO } from "../constants/action-types";

export const addArticle = article => (
    { type: ADD_ARTICLE, payload: article }
  );

export const updateUserInfo = userInfo => (  
  { type: UPDATE_USER_INFO, payload: userInfo }
);

