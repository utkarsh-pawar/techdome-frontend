import React, { useState } from "react";
import styles from "../Styles/CreateBlog.module.css";
import axios from "axios";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(undefined);

  const createPostHandler = async (e) => {
    try {
      e.preventDefault();

      const bodyFormData = new FormData();
      bodyFormData.append("title", title);
      bodyFormData.append("content", content);
      bodyFormData.append("img", image);
      // console.log(image);

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
        setContent("");
        setTitle("");
        setImage({ name: "" });
      }
      // console.log(post.data);
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
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Create A Blog</h1>
        <form
          encType="multipart/form"
          method="POST"
          onSubmit={createPostHandler}
        >
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
  );
};
export default CreateBlog;
