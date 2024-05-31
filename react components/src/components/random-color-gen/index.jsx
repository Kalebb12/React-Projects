import { useEffect, useState } from "react";

const RandomColor = () => {
    const [typeOfColor,setTypeOfColor]=useState("hex")
    const [color,setColor] = useState("#000000")
    
    const randomColorUtility = (length)=>{
        return Math.floor(Math.random() * length)
    }

    const generateRandomHexColor = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor ="#"
        for(let i = 0;i<6;i++){
            hexColor += hex[randomColorUtility(hex.length-1)]
        }
        setColor(hexColor)
    }   

    const generateRandomRgbColor = () => {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        let rgbColor = `rgb(${r},${g},${b})`
        setColor(rgbColor)
    }

    useEffect(()=>{
        typeOfColor === "hex"? generateRandomHexColor() : generateRandomRgbColor()
    },[typeOfColor])
    return ( 
        <div
        style={
            {
                height:"100vh",
                width:"100vw",
                background:color,
            }
        }>
            <button onClick={()=>setTypeOfColor("hex")}>Create HEX color</button>
            <button onClick={()=>setTypeOfColor("rgb")}>Create RGB color</button>
            <button onClick={typeOfColor == "hex"? generateRandomHexColor:generateRandomRgbColor}>Generate Random Colors</button>
            <div style={
                {
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    color:"white",
                    // fontSize:"60px",
                    marginTop:"50px",
                    flexDirection:"column",
                    gap:"20px"
                }
            }>
                <h3>{typeOfColor == "hex"? "hex color ":"rgb color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
     );
}
 
export default RandomColor;