import { createStore } from "redux";
import { loadState } from "../../app/services/utilities/persist-state";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer, loadState());

export default store;