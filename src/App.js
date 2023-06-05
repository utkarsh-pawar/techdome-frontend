import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Signup from "./pages/signuup";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Blog from "./pages/Blog";
import ProtectedRoute from "./components/protectedRoute";
import { useDispatch } from "react-redux";
import { userActions } from "./store/userSlice";
import CreateBlog from "./pages/CreateBlog";
import Profile from "./pages/profile";
import EditPages from "./pages/editPage";
import Blogs from "./pages/Blogs";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  if (token) {
    dispatch(userActions.login({ token }));
  }
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-blog/:id" element={<EditPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
