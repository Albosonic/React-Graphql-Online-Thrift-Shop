import { createStore } from "redux";
import { loadState, saveState } from "../../app/services/utilities/persist-state";

import throttle from 'lodash/throttle';
import rootReducer from "../reducers/index";

const persistState = loadState();
const store = createStore(rootReducer, persistState);

store.subscribe(throttle(() => {
    saveState(store.getState());
  }), 1000)

export default store;