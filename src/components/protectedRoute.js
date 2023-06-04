import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { isUser } from "../api/auth";
import { userActions } from "../store/userSlice";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;
  if (token) {
    dispatch(
      userActions.login({
        token: token,
      })
    );
    return <Outlet />;
  }
  <Navigate to="/login" />;
};

export default ProtectedRoute;
