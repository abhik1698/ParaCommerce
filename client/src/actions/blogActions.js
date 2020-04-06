import { FETCH_BLOGS, NEW_BLOG } from "./types";

export const fetchBlogs = () => (dispatch) => {
  console.log("fetchBlogs Action");
  fetch("http://localhost:5000/api/blogs/getAllBlogs")
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FETCH_BLOGS,
        payload: data.blogs,
      })
    );
};

export const createBlog = (blogData) => (dispatch) => {
  console.log("createBlog Action with blogData: " + JSON.stringify(blogData));
  fetch("http://localhost:5000/api/blogs/addBlog", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
    body: JSON.stringify(blogData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("After Blog Action: " + JSON.stringify(data));
      dispatch({
        type: NEW_BLOG,
        payload: data.blog,
      });
    })
    .catch((err) => console.log(err));
};
