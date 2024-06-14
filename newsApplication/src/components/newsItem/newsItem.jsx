import "./newsItem.css"
import defaultImg from "/newsImg.jpeg"
export const NewsItem = ({news}) => {
    return ( 
        <div className="card bg-dark text-light d-inline-block  m-3 p-2 itemCard overflow-hidden g-md-4">
            <img src={news.urlToImage?news.urlToImage:defaultImg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title news-title">{news.title}</h5>
                <p className="card-text des overflow-hidden">{news.description?news.description:"[Removed]"}</p>
                <a href={news.url} className="btn btn-primary">Read More</a>
            </div>
        </div>
     );
}