import { applyMiddleware, combineReducers, createStore } from "redux";
import countriesReducer from "./reducers/countriesReducer";
import weatherReducer from "./reducers/weatherReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({ countriesReducer, weatherReducer });
const store = createStore(reducers, applyMiddleware(thunk));
export default store;