import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getBlogDetail, getMyBlogs } from "../api/blogs";
import styles from "../Styles/edit.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const EditPages = () => {
  const params = useParams();
  const [blogData, setBlogData] = useState(null);
  const [updateData, setUpdatedData] = useState({});
  console.log(params);
  const notify = (message) => toast(message);
  const updateBlogHandler = async (e) => {
    try {
      e.preventDefault();

      const bodyFormData = new FormData();
      bodyFormData.append("blogId", params.id);
      bodyFormData.append("title", updateData.title);
      bodyFormData.append("content", updateData.content);
      bodyFormData.append("img", updateData.img);
      let token = localStorage.getItem("token");
      token = `Bearer ${token}`;
      const post = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/blog/update`,
        bodyFormData,
        {
          headers: {
            Authorization: token,
            "content-type": "multipart/form-data",
          },
        }
      );
      notify("blog updated successfully");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      } else if (err.request) {
        console.log(err.request.data);
      } else {
        console.log(err.message);
      }
    }
  };
  useEffect(() => {
    getBlogDetail(params.id).then((data) => {
      setUpdatedData(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form
          className={styles.form}
          encType="multipart/form"
          method="POST"
          onSubmit={updateBlogHandler}
        >
          <label>Title</label>
          <input
            value={updateData?.title}
            onChange={(e) =>
              setUpdatedData({ ...updateData, title: e.target.value })
            }
          />
          <label>content</label>
          <textarea
            value={updateData?.content}
            onChange={(e) =>
              setUpdatedData({ ...updateData, content: e.target.value })
            }
          />
          <label>Current Image</label>
          <img src={updateData?.img} className={styles.img} />
          <label>Image needed to be changed</label>{" "}
          <input
            type="file"
            onChange={(e) =>
              setUpdatedData({ ...updateData, img: e.target.files[0] })
            }
            accept="image/png, image/jpeg"
          ></input>
          <button type="submit">update blog</button>
        </form>
      </div>
    </div>
  );
};

export default EditPages;
