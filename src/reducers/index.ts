import { combineReducers } from "redux";

import droneReducer from "./drone";

const rootReducer = combineReducers({
  drone: droneReducer
});

export default rootReducer;
