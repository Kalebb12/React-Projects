import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css"
const StarRating = ({noOfStars = 5}) => {
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)
    const handleClick =(currentIndex)=>{
        setRating(currentIndex)
    }
    const handleMouseEnter =(currentIndex)=>{
        setHover(currentIndex)
    }
    const handleMouseLeave =()=>{
        setHover(rating)
    }
    return ( 
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_,index)=>{
                    index ++
                    return (
                        <FaStar 
                        key={index} 
                        className={index <= (hover || rating)?"active":"inActive"}
                        onMouseLeave={()=>{
                            handleMouseLeave()
                        }}
                        onMouseEnter={()=>{
                            handleMouseEnter(index)
                        }}
                        onClick={()=>{
                            handleClick(index)
                        }}
                        size={40}
                        />
                    )
                })
            }
        </div>
     );
}
 
export default StarRating;