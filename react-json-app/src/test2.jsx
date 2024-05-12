import { useState , useEffect } from "react";
const Test = () => {
  const [resourceType,setResourceType]=useState('posts')
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => console.log(json))
  },[resourceType])
  return (
    <div>
      <button onClick={()=>setResourceType("posts")}>Posts</button>
      <button onClick={()=>setResourceType("comments")}>Comments</button>
      <button onClick={()=>setResourceType("users")}>Users</button>
      <h1>{resourceType}</h1>
    </div>
  );
}
 
export default Test;