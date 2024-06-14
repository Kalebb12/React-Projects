import useFetch from "./useFetch";

const Artist = () => {
    const { data } = useFetch("http://localhost:5000/artist")
    return (
        <div className="artist">
                {data && data.map((artist) => {
                    return (
                        <a href={`artist/${artist.id}`}>
                            <div key={artist.id} className="item" >
                                <img className="image" src={require("./data/imgs/" + artist.imgSrc)} alt="" />
                                <h2>{artist.name}</h2>
                            </div>
                        </a>
                    )
                })}
            </div>
    );
}

export default Artist;