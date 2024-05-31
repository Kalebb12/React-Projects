import { useEffect } from "react";
import { useState } from "react";
import "./styles.css"
const LoadMoreData = () => {
    const [loading,setLoading]=useState(false)
    const [product,setproduct]= useState([])
    const [count,setCount]=useState(0)
    const [disableButton,setDisableButton] =  useState(false)

    async function fetchProducts(){
        try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count == 0? 0 :count * 20}`)
            const result = await response.json()


            if(result && result.products && result.products.length){
                setproduct((prevData)=>[...prevData,...result.products])
                setLoading(false)
            }
        }
        catch(e){
            console.error(e)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[count])

    useEffect(()=>{
        if(product.length == 100){
            setDisableButton(true)
        }
    },[product])

    if (loading){
        return <div>Loading data.... please wait</div>
    }
    return ( 
        <div className="load-more-container">
            <div className="productContainer">
                {
                    product && product.length ? 
                    product.map(item=>{
                        return(
                            <div className="product" key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        )
                    })
                    :null
                }
            </div>
            <div className="buttonContainer">

                <button disabled={disableButton} onClick={()=>setCount(count +1)}>load more products</button>
                {
                    disableButton?
                    <p>No more products to load</p>
                    :null
                }
            </div>

        </div>
     );
}
 
export default LoadMoreData;