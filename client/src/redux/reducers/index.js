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
  UPDATE_CURRENT_SHOP,
  UPDATE_ALL_STORES_FEED,
  UPDATE_ONE_MSG
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
  currentShop: {
    shopInfo: {
      storeId: null,
      sizes: null,
      storeName: null,
      stars: null,
      storeItems: [],
      messages: []
    }
  },
  allStores: [],
  items: [],
  actionMode: {
    storeItemActionMode: false,
    title: '',
    itemEditContent: {
      storeId: null,
      itemType: null,
      itemSubType: null,
      imgFileData: [],
      itemDescription: null,
      price: null
    }
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return { ...initialState }
    case UPDATE_USER_INFO:
      return { ...state, userInfo: [action.payload] }
    case TOGGLE_ACTION_MODE:
      return {
        ...state,
        actionMode: {
          storeItemActionMode: action.payload.storeItemActionMode,
          title: action.payload.title
        },
      }
    case STORE_ITEM_EDIT_MODE:
      return {
        ...state,
        actionMode: {
          storeItemActionMode: action.payload.storeItemActionMode,
          title: action.payload.title,
          itemEditContent: { ...action.payload.storeItem }
        }
      }
    case UPDATE_STORE_DATA:
      return {
        ...state,
          myStore: {
            ...state.myStore,
              storeId: action.payload.storeId
          },
      }
    case UPDATE_STORE_NAME:
      return {
        ...state,
          myStore: {
            ...state.myStore,
            storeName: action.payload
          }
      }
    case UPDATE_CURRENT_SHOP:
      return {
        ...state,
        currentShop: action.payload
      }
    case ADD_ONE_ITEM: // might need a serparate SET_ITEMS for login.
      return {
        ...state,
          items: [ ...state.items, action.payload ]
      }
    case UPDATE_ONE_MSG:
      console.log('heee',action.payload)      
      return {
        ...state,
        allStores : [ ...action.payload ]
      }
    case UPDATE_ALL_ITEMS:
      return {
        ...state,
          myStore: {
            ...state.myStore
          },
          items: [...action.payload],
          actionMode: {
            ...state.actionMode,
            itemEditContent: {
              ...state.actionMode.itemEditContent
            }
          }
      }
      case UPDATE_ALL_STORES_FEED:        
        return {
          ...state,
            allStores: [...action.payload]
        }
    default:
      return state;
  }
};
export default rootReducer;