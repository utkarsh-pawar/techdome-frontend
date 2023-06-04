import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getBlogDetail, getMyBlogs } from "../api/blogs";

const EditPages = (props) => {
  const params = useParams();
  const [blogData, setBlogData] = useState(null);
  const [updateData, setUpdatedData] = useState({});
  console.log(params);
  useEffect(() => {
    getBlogDetail(params.id).then((data) => {
      setUpdatedData(data);
    });
  }, []);
  console.log(updateData);

  return (
    <div>
      <div>
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default EditPages;
