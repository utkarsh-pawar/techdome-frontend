import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../api/blogs";
import BlogCard from "../components/BlogCard";
import styles from "../Styles/blog.module.css";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState();
  useEffect(() => {
    getAllBlogs().then((data) => setAllBlogs(data));
  }, []);
  console.log(allBlogs);
  return (
    <div className={styles.container}>
      {allBlogs
        ? allBlogs.map((blog) => {
            return (
              <BlogCard
                title={blog.title}
                content={blog.content}
                img={blog.img}
                id={blog._id}
              />
            );
          })
        : "Loading..."}
    </div>
  );
};

export default Blogs;
