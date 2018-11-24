import { ADD_ARTICLE, TOGGLE_EDIT_MODE } from "../constants/action-types";
import { UPDATE_USER_INFO } from "../constants/action-types";
const initialState = {
  articles: [],
  userInfo: [],
  storeItemEditMode: false
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] }
    case UPDATE_USER_INFO:      
      return {...state, userInfo: [action.payload] }
    case TOGGLE_EDIT_MODE:
      return {...state, storeItemEditMode: action.payload }
    default:
      return state;
  }
};
export default rootReducer;