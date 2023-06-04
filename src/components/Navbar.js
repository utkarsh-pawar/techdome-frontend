import React from "react";

import styles from "../Styles/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userSlice";

const Navbar = () => {
  const isUser = useSelector((state) => state.user.isUser);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userActions.logout());
    console.log("hello");
  };

  return (
    <nav className={styles.header}>
      <div className={styles["header-container"]}>
        <div className={styles["header-logo"]}></div>
        <div className={styles["header-links"]}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/blogs"
            end
          >
            Blog
          </NavLink>

          {
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/signup"
            >
              Signup
            </NavLink>
          }
          {
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/login"
            >
              Login
            </NavLink>
          }
          {isUser && (
            <Link
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={logoutHandler}
            >
              Logout
            </Link>
          )}
          {isUser && (
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/profile"
            >
              profile
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
