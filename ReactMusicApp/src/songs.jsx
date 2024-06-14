import { useEffect } from "react";
import { useState } from "react";
import AllSongs from "./allSongs";
import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Trending from "./trending";
import Search from "./search";
import Artist from "./artist";
import ComingSoon from "./soon"
import useFetch from "./useFetch"
import ArtistDetails from "./artistDetails";
const Songs = () => {
    const { data } = useFetch('http://localhost:5000/songs')
    const [Src, setSrc] = useState(null)
    const [play, setPlay] = useState(true)
    const handlePlay = (src) => {
        setSrc(src)
        setPlay(!play)
    }
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <AllSongs data={data} play={play} title="All Songs" handlePlay={handlePlay} Src={Src} />
                    </Route>
                    <Route path="/trending">
                        {data && <AllSongs title="Trending Songs" play={play} data={data.filter((song) => song.rating == 10)} handlePlay={handlePlay} Src={Src} />}
                    </Route>
                    <Route path="/search">
                        <Search handlePlay={handlePlay} Src={Src} />
                    </Route>
                    <Route exact path="/artist">
                        <Artist />
                    </Route>
                    <Route path="/artist/:id">
                        <ArtistDetails/>  
                    </Route>
                    <Route path="*">
                        <ComingSoon />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Songs;