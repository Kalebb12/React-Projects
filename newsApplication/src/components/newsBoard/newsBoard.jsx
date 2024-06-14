import { useState,useEffect } from "react";
import { NewsItem } from "../newsItem/newsItem";

export const NewsBoard = ({category}) => {
    const [article,setArticle]=useState([])
    useEffect(()=>{
        let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
       fetch(url)
       .then(res=>{return res.json()})
       .then(data =>setArticle(data.articles))
    },[category])
    return ( 
        <div>
            <h2 className="text-center">latest <span className="badge bg-danger fs-4">NEWS</span></h2>
            <div className="container-xl">
                {
                    article.map((NEWS,index)=>{
                        return(
                            <NewsItem key={index} news={NEWS}/>
                        )
                    })
                }
            </div>
        </div>
     );
}