import React, { useState } from "react";
import styles from "../Styles/signup.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "../api/auth";

const Signup = () => {
  const notify = (message) => toast(message);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const signupHandler = (E) => {
    E.preventDefault();
    signup(signupData, notify);
  };
  return (
    <div className={styles.background}>
      <ToastContainer></ToastContainer>
      <form className={styles.form} onSubmit={signupHandler}>
        <div className={styles.inputdiv}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            placeholder="Enter your name"
            required
            onChange={(e) => {
              setSignupData({ ...signupData, name: e.target.value });
            }}
          ></input>
        </div>
        <div className={styles.inputdiv}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your email"
            required
            onChange={(e) => {
              setSignupData({ ...signupData, email: e.target.value });
            }}
          ></input>
        </div>
        <div className={styles.inputdiv}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            className={styles.input}
            placeholder="Enter your password"
            required
            onChange={(e) => {
              setSignupData({ ...signupData, password: e.target.value });
            }}
          ></input>
        </div>

        <button type="submit" className={styles.btn}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
