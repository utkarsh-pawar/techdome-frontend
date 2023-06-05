import axios from "axios";
import { userActions } from "../store/userSlice";
import { Link as RouterLink, Navigate } from "react-router-dom";

export const isUser = async (dispatch, navigate) => {
  const token = localStorage.getItem("token");

  // console.log(token, user);
  if (token) {
    await dispatch(
      userActions.login({
        token: token,
      })
    );
    navigate("/blogs");
  }
  navigate("/login");
};

export const login = async (data, notify, dispatch) => {
  try {
    console.log(data);
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/login`,
      data
    );
    console.log(response);
    localStorage.setItem("token", response?.data?.token);
    await dispatch(userActions.login({ token: response.data.token }));
    notify("Logged in successfully");
    return response;
  } catch (e) {
    if (e.response) {
      await notify(e.response.data.error);
    } else if (e.request) {
      console.log(e.request.data);
    } else {
      console.log(e.message);
    }
  }
};
export const signup = async (data, notify) => {
  try {
    console.log(data);
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/signup`,
      data
    );
    notify("New user created Login to continue");
    return response;
  } catch (e) {
    if (e.response) {
      await notify(e.response.data.error);
    } else if (e.request) {
      console.log(e.request.data);
    } else {
      console.log(e.message);
    }
  }
};
