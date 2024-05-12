import { useState } from "react"

const Component = () => {
    const handleFollow =()=>{
        setFollowers(followers+1)
    }
    const [followers ,setFollowers]=useState(0)
    const handleClick=(name)=>{
        setLike(like+1)
    }
    const [like,setLike] =useState(0)
    return ( 
        <div className="innerWidth">
            <h2>this is our component</h2>
            <p>liked {like} times</p>
            <button onClick={()=>{handleClick("btn")}}>like</button>
            <div>
                <p>{followers} followers</p>
                <button onClick={handleFollow}>follow</button>
            </div>
        </div>
     );
}
 
export default Component;