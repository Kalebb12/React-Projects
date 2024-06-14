import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useState } from "react";
import AllSongs from "./allSongs";

const ArtistDetails = () => {
    const { id } = useParams()
    const { data:songs } = useFetch('http://localhost:5000/songs')
    const { data: artist } = useFetch("http://localhost:5000/artist/" + id)
    const [Src, setSrc] = useState(null)
    const [play, setPlay] = useState(true)
    const handlePlay = (src) => {
        setSrc(src)
        setPlay(!play)
    }
    return (
        <div>
            
                <div className="container">
                {artist &&
                    <article style={{ float: "left" }}>
                        <div key={artist.id} className="item" >
                            <img className="image" src={require("./data/imgs/" + artist.imgSrc)} alt="" />
                            <h2>{artist.name}</h2>
                            <h3>Followed by {artist.followers} followers</h3>
                        </div>
                    </article>
                }
                
                {/* {songs &&
                    <AllSongs data={songs.filter(songs.artist!== "wizkid")}></AllSongs>
} */}

                </div>

            

        </div>
    );
}

export default ArtistDetails;