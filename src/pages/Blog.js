import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import styles from "../Styles/blog.module.css";
import { getBlogDetail } from "../api/blogs";
import { useParams } from "react-router-dom";
const Blog = () => {
  const params = useParams();
  const [blogData, setblogData] = useState();

  console.log(params);
  useEffect(() => {
    getBlogDetail(params.id).then(setblogData);
  }, []);
  console.log(blogData);
  return (
    <div className={styles.blog}>
      <div className={styles.card}>
        <div className={styles.imgdiv}>
          <img src={blogData?.img} className={styles.img}></img>
          <div
            style={{
              position: "absolute",
              top: "65%",
              left: "50%",
              gap: "1.5rem",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1 style={{ fontSize: "3.rem", color: "white" }}>
              {blogData?.title}
            </h1>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <BsStarFill className={styles.star} />
              <BsStarFill className={styles.star} />
              <BsStarFill className={styles.star} />
              <BsStarFill className={styles.star} />
              <BsStarFill className={styles.star} />
            </div>
          </div>
          <h1 style={{ position: "relative" }}>{blogData?.title}</h1>
          <p>{blogData?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
