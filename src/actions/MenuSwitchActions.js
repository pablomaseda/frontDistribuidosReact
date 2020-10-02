import { actions } from "./types";

export function selectMenu(menuSelected) {
  return (dispatch) => {
    dispatch({
      type: actions.MenuSwitch,
      payload: menuSelected,
    });
  };
}
