import { useState } from "react";

const AllSongs = ({ data, handlePlay, Src }) => {
    const arr = []
    return (
        <div>
            <div className="flex">
                {data && data.map((song) => {
                    return (
                        <article key={song.id} className="margin">
                            <img className="img" src={require("./data/imgs/" + song.imgSrc)} alt="" />
                            <h3>{song.title}</h3>
                            <p>{song.artist}</p>
                            {/* <audio src={require("./data/audio/" + song.audioSrc)} controls></audio> */}
                            {<p onClick={() => { handlePlay(song.audioSrc) }} style={{ cursor: "pointer" }}>play audio</p>}
                            {/* <p style={{display:"none"}}>{arr.push(song.audioSrc)}</p> */}
                        </article>
                    )
                })}
            </div>
            {Src && <audio src={require("./data/audio/" + Src)} controls autoPlay></audio>}
        </div>
    );
}

export default AllSongs;