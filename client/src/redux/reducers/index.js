import
{
  ADD_ARTICLE,
  UPDATE_USER_INFO,
  TOGGLE_ACTION_MODE,
  UPDATE_STORE_DATA 
}
from "../constants/action-types";

const initialState = {
  articles: [],
  userInfo: [],
  myStore: {
    id: null,
    title: null,
    items: []
  },
  actionMode: {
    storeItemActionMode: false,
    title: ''
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE: // this was an example I can get rid of it.
      return { ...state, articles: [...state.articles, action.payload] }
    case UPDATE_USER_INFO:
      return { ...state, userInfo: [action.payload] }
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
    case UPDATE_STORE_DATA:
      return {
        ...state,
          ...state.items,
            items: [...state.items, ...action.payload.items]
      }
    default:
      return state;
  }
};
export default rootReducer;