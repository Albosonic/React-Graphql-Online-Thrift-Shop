import
{
  UPDATE_USER_INFO,
  TOGGLE_ACTION_MODE,
  UPDATE_STORE_DATA,
  UPDATE_STORE_NAME,
  UPDATE_ITEMS
}
from "../constants/action-types";

const initialState = {
  userInfo: [],
  myStore: {
    storeId: null,
    sizes: null,
    storeName: null,
    stars: null,
  },
  items: [],
  actionMode: {
    storeItemActionMode: false,
    title: ''
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
              storeId: action.payload.storeId
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
    case UPDATE_ITEMS: // might need a serparate SET_ITEMS for login.
      console.log('payload', action.payload)
      return {
        ...state,
          items: [ ...state.items, action.payload ]
      }
    default:
      return state;
  }
};
export default rootReducer;