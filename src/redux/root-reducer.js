import { combineReducers } from "redux";
import usersReducers from "./reducer";

// to combine reducers and access states from redux store 
const rootReducer = combineReducers({
  data: usersReducers
});

export default rootReducer;
