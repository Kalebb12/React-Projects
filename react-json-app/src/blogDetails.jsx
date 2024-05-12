import { useState,useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/blogs/" + id)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setBlog(data);
    });
  },[])
  const handleDelete = (id) => {
    setLoading(!loading)
    fetch("http://localhost:5000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="innerWidth">
      {/* <h1>Blog Details - {id}</h1> */}
      {blog && (
        <div>
          <h1>{blog.title}</h1>
          <p>
            <i>written by : {blog.author}</i>
          </p>
          <p>{blog.body}</p>
          {
            loading ? <button className="delete_btn" disabled>loading...</button> : <button className="delete_btn"onClick={() => {handleDelete(blog.id);}}>Delete Blog</button>
          }
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
