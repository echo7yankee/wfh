import { GET_USER_DETAILS } from "../types";

const initState = {
  user: {}
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_DETAILS:
      console.log(action.payload);

      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
