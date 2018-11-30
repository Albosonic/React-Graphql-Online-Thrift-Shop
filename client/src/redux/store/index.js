import { createStore } from "redux";

import rootReducer from "../reducers/index";

const loadState = () => {
    try {
      let serializedState = localStorage.getItem('appState');
      if(localStorage.getItem('appState') === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch {
      return undefined;
    }
  }

const store = createStore(rootReducer, loadState());

export default store;