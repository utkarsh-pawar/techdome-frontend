import React, { useEffect, useState } from "react";
import { getMyBlogs } from "../api/blogs";
import styles from "../Styles/profile.module.css";
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [myBlogs, setMyblogs] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const deleteBlogHandler = (id) => {};
  useEffect(() => {
    getMyBlogs().then(setMyblogs);
  }, [getMyBlogs]);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div></div>
      {myBlogs ? (
        myBlogs?.map((blog) => {
          return (
            <div className={styles.blog}>
              <img src={blog.img} className={styles.img} />
              <h4>{blog.title}</h4>
              <p>{blog.content}</p>
              <MdDeleteForever
                onClick={deleteBlogHandler}
                className={styles.delete}
              ></MdDeleteForever>
              <BiEdit
                className={styles.edit}
                onClick={() => navigate(`/edit-blog/${blog._id}`)}
              ></BiEdit>
            </div>
          );
        })
      ) : (
        <h1>...loading</h1>
      )}
    </div>
  );
};

export default Profile;
