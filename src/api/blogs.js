import axios from "axios";

let token = localStorage.getItem("token");
token = `Bearer ${token}`;

export const getMyBlogs = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/blog/myblogs`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  console.log(response.data.docs);
  return response.data.docs;
};
export const getBlogDetail = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/blog/detail/${id}`,

    {
      headers: {
        Authorization: token,
      },
    }
  );
  console.log(response.data);
  return response.data;
};
