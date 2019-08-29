import axios from "axios";
import {
  SET_IS_LOADING,
  CATCH_ERRORS,
  GET_USER_DETAILS,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED
} from "../types";
import jwt from "jsonwebtoken";

export const loginUser = (history, credentials) => async dispatch => {
  try {
    dispatch({
      type: SET_IS_LOADING
    });

    const response = await axios.post("/api/user/login", credentials);
    const { data } = response;

    const decodedToken = jwt.decode(data.token);
    dispatch(getUserDetails(decodedToken._id));

    setAuthorizationHeader(data.token);
    dispatch({ type: SET_AUTHENTICATED });

    history.push("/home");
  } catch (error) {
    dispatch({
      type: CATCH_ERRORS,
      payload: error.response.data
    });
  }
};

export const logoutUser = () => async dispatch => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({
    type: SET_UNAUTHENTICATED
  });
};

const getUserDetails = id => async dispatch => {
  const userResponse = await axios.get(`/api/user/${id}`);
  const userResponseData = userResponse.data;

  const roleResponse = await axios.get(
    `/api/user/role/${userResponseData.role}`
  );
  const roleResponseData = roleResponse.data;

  const locationResponse = await axios.get(
    `api/user/location/${userResponseData.location}`
  );
  const locationResponseData = locationResponse.data;

  const user = {
    id: userResponseData._id,
    name: userResponseData.name,
    email: userResponseData.email,
    role: roleResponseData.role,
    location: {
      name: locationResponseData.name,
      abbreviation: locationResponseData.abbreviation
    }
  };

  dispatch({
    type: GET_USER_DETAILS,
    payload: user
  });
};

const setAuthorizationHeader = token => {
  const FBIdToken = token;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
