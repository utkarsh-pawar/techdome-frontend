import React, { useEffect, useState } from "react";
import styles from "../Styles/signup.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, Navigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const loginHandler = (E) => {
    E.preventDefault();
    login(loginData, notify, dispatch);
    console.log("HELLO");
  };
  const notify = (message) => toast(message);
  const isUser = useSelector((state) => state.user.isUser);

  console.log(isUser);
  if (isUser) {
    return <Navigate to="/blogs" replace></Navigate>;
  }

  return (
    <div className={styles.background}>
      <ToastContainer></ToastContainer>
      <form onSubmit={loginHandler} className={styles.form}>
        <div className={styles.inputdiv}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your email"
            onChange={(e) => {
              setLoginData({ ...loginData, email: e.target.value });
            }}
            required
          ></input>
        </div>
        <div className={styles.inputdiv}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            className={styles.input}
            placeholder="Enter your password"
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value });
            }}
            required
          ></input>
        </div>

        <button type="submit" className={styles.btn} onClick={loginHandler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
