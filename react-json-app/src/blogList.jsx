const BlogList = ({data,title,handleDelete}) => {
    return ( 
        <div >
            <h1 style={{marginLeft:7}}>{title}</h1>
            {
            data.map(blog=>{
                return(
                    <div key={blog.id} className="blog-item">
                        <a className="item" href={`/blog/`+ blog.id }> 
                            <h1>{blog.title}</h1>
                            <p>written by {blog.author}</p>
                        </a>
                        {/* <button onClick={()=>{handleDelete(blog.id)}}>Delete Blog</button> */}
                    </div>
                )
            })
        }
        </div>
     );
}
 
export default BlogList;