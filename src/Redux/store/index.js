import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchArrayReducer from "../reducers";
import mainReducer from "../reducers/mainreducer";
const uniqueReducer = combineReducers({
  company: mainReducer,
  fetch: fetchArrayReducer,
});

const store = configureStore({
  reducer: uniqueReducer,
});

export default store;
