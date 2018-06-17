import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
export const history = createHistory();

const enhancer = applyMiddleware(routerMiddleware(history), thunk);

export const store = createStore(reducer, composeWithDevTools(enhancer));
