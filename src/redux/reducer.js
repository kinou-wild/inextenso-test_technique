import { combineReducers } from "redux";

const INITIAL_STATE = {
  isLoggedIn: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { isLoggedIn: true };
    case "LOG_OUT":
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  login: loginReducer,
});
