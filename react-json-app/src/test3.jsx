import useFetch from "./useFetch";
import './test3.css'
const Test3 = () => {
    const {data , loading , err} = useFetch('https://662a489267df268010a34e35.mockapi.io/chats');
    return ( 
        <div>
            {loading && <p>Loading...</p>}
            {err && <p>{err}</p>}
            {data && data.map( chat =>{
                return(
                    <div key={chat.id} className="innerWidth">
                        <div className="flex">
                            <div className="design">
                                <img src={chat.avatar} alt="" className="profile" />
                            </div>
                            <p className="name">name : {chat.name}</p>
                            <p className="l-seen">last seen : {chat.date}</p>
                        </div>
                    </div>
                )
            } )}
        </div>
     );
}
 
export default Test3;