import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import typesPage from "./containers/typesPage/reducer"

export default combineReducers({
  router: routerReducer,
  typesPage,
});
