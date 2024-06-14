import AllSongs from "./allSongs";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";
const Search = ({ handlePlay, Src }) => {
    const [data, setData] = useState(null)
    const [search, setSearch] = useState("")
    const { data: songs } = useFetch('http://localhost:5000/songs')
    return (
        <div className="sch">
            <input type="search" value={search} onChange={(e) => { setSearch(e.target.value) }} className="input" />
            <div className="bl">
                {songs && <AllSongs handlePlay={handlePlay} Src={Src} data={songs.filter((song) => song.title.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1)}></AllSongs>}
            </div>
        </div >
    );
}

export default Search;