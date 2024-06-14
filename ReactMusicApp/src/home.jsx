import "./home.css"
import Songs from "./songs";
const Home = () => {
    return (
        <div className="size">
            <div className="sideBar" >
                <h2 className="inline">Browse</h2>
                <a href="/" className="link">All songs</a>
                <a href="/trending" className="link">Trending songs</a>
                <a href="/artist" className="link">Artist</a>
                <a href="/trendA" className="link">Trending Albums</a>
                <a href="/recent" className="link">Recently Added</a>
                <a href="/support" className="link">Supported</a>
                <hr className="hr" />
            </div>
            <div className="home">
                <Songs />
            </div>
        </div>
    );
}

export default Home;