import { ADD_ARTICLE, TOGGLE_ACTION_MODE } from "../constants/action-types";
import { UPDATE_USER_INFO } from "../constants/action-types";
const initialState = {
  articles: [],
  userInfo: [],
  actionMode: {
    storeItemActionMode: false,
    title: ''
  }
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] }
    case UPDATE_USER_INFO:
      return {...state, userInfo: [action.payload] }
    case TOGGLE_ACTION_MODE:            
      return {
        ...state, 
        actionMode: {
          ...state.actionMode,
          storeItemActionMode: {
            ...state.actionMode.storeItemActionMode, 
            storeItemActionMode: action.payload.storeItemActionMode
          },
          title: {
            ...state.actionMode.title,
            title: action.payload.title
          }     
        }
      }
    default:
      return state;
  }
};
export default rootReducer;