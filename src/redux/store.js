import { createStore, compose } from "redux";
import readReducers from "./action";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(readReducers, composeEnhancers());
export default store;
