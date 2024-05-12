import { useState } from "react";
import "./newBlog.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newBlog = {title,author,body}
        fetch("http://localhost:5000/blogs",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newBlog)
        })
        history.push("/")
    }


  return (
    <div>
      <form>
        <h2 className="formHeader">Add a New Blog</h2>
        <label htmlFor="title">Blog Title :</label>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Title..."
          id="title"
          className="formField"
        />

        <label htmlFor="body">Blog Body :</label>
        <textarea
          name=""
          id="body"
          placeholder="Add Blog Body..."
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>

        <label htmlFor="author">Blog Author :</label>
        <select
          name=""
          id="author"
          className="formField"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="Mario">Mario</option>
          <option value="Luigi">Luigi</option>
        </select>

        <button className="formBtn" onClick={handleSubmit}>
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
