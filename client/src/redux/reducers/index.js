import
{
  ADD_ARTICLE,
  UPDATE_USER_INFO,
  TOGGLE_ACTION_MODE,
  UPDATE_STORE_DATA,
  UPDATE_STORE_NAME
}
from "../constants/action-types";

const initialState = {
  articles: [],
  userInfo: [],
  myStore: {
    storeId: null,
    sizes: null,
    storeName: null,
    stars: null,
    items: [],
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
          myStore: {
            ...state.myStore,
              storeId: action.payload.storeId,
              items: [...state.myStore.items, ...action.payload.item]
          }
      }
    case UPDATE_STORE_NAME:
      return {
        ...state,
          myStore: {
            ...state.myStore,
            storeName: action.payload
          }
      }
    default:
      return state;
  }
};
export default rootReducer;