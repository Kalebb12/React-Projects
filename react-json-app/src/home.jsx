import { useEffect, useState } from "react";
import "./home.css"
import BlogList from "./blogList";
import useFetch from "./useFetch";
const Home = () => {
    const handleDelete=(id)=>{
       const newBlog= data.filter(blog=>blog.id !==id)
       setData(newBlog)
    }
    const{loading,data,err} = useFetch("http://localhost:5000/blogs")
    return ( 
        <div className="innerWidth">
            {
                loading && <p>loading.....</p>
            }
            {
            err &&  <p>{err}</p> 
            }
            {
                data && <BlogList data={data} title="All Blogs" handleDelete={handleDelete}/>
            }
        </div>
     );
}
 
export default Home; 