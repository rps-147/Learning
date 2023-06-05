import { combineReducers } from "redux";
import loginReducer from "./reducers/users";

const rootReducer = combineReducers({
  users: loginReducer,
});

export default rootReducer;
