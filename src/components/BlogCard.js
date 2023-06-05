import React from "react";
import styles from "../Styles/blog.module.css";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, content, img, id }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.blogcard} onClick={() => navigate(`/blog/${id}`)}>
      <img src={img}></img>
      <div>
        <h3>{title}</h3>
        <p>{content.slice(0, 300)}...</p>
      </div>
    </div>
  );
};

export default BlogCard;
