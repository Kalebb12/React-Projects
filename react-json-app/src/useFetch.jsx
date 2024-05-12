import { useState ,useEffect} from "react"
const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [err,setErr]=useState(false)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(url)
        .then((res) =>{
            // res.json()
            if(res.ok==false){
                setLoading(false)
                throw Error("failed to connect to server...")
            }
            else{
                setErr(false)
                setLoading(false)
                return res.json()
            }
        })
        .then(blogs => setData(blogs))
        .catch(error=>{
            setErr(error.message)
            setLoading(false)
        })
    },[url])

    return{loading , data , err}
}
 
export default useFetch;