import {
  CATCH_ERRORS,
  SET_IS_LOADING,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED
} from "../types";

const initState = {
  isLoading: false,
  authenticated: false,
  errors: {},
  auth: ""
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        isLoading: false
      };

    case SET_UNAUTHENTICATED:
      return initState;
    case CATCH_ERRORS:
      return {
        ...state,
        errors: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default authReducer;
