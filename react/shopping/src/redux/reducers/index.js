import { combineReducers } from "redux";
import databaseReducer from "./databaseReducer";
const rootReducer = combineReducers({
  databaseReducer,
});

export default rootReducer;
