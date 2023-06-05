import React, { useState } from "react";

import styles from "../Styles/edit.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(undefined);
  const notify = (message) => toast(message);

  const createPostHandler = async (e) => {
    try {
      e.preventDefault();

      const bodyFormData = new FormData();
      bodyFormData.append("title", title);
      bodyFormData.append("content", content);
      bodyFormData.append("img", image);
      // console.log(image);
      notify("Wait a minute uploading image and data for the blog");
      let token = localStorage.getItem("token");
      token = `Bearer ${token}`;
      const post = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/blog/create`,
        bodyFormData,
        {
          headers: {
            Authorization: token,
            "content-type": "multipart/form-data",
          },
        }
      );
      if (post.data) {
        notify("Blog created Succcessfully");
        setContent("");
        setTitle("");
        setImage({ name: "" });
      } else {
        console.log("someething went wrong");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <form
            className={styles.form}
            encType="multipart/form"
            method="POST"
            onSubmit={createPostHandler}
            style={{ gap: "0.5rem" }}
          >
            <ToastContainer />
            <h1>Create A Blog</h1>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title of post"
            />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter your blog here"
              cols="30"
              rows="10"
            />
            {/* {console.log(image)} */}
            <input
              type="file"
              name="uploadImage"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/png, image/jpeg"
            />

            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreateBlog;
