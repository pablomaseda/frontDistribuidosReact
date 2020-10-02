import { combineReducers } from "redux";

import MenuSwitchReducer from "./MenuSwitchReducer";
//combino los states de los reducers en 1 solo para poder accederlo desde los componentes
export default combineReducers({
  menuSelected: MenuSwitchReducer,
});
