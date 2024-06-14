import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { NewsBoard } from './components/newsBoard/newsBoard'
function App() {
  const [category,setCategory]=useState("general")
  return (
    <div>
     <Navbar setCategory={setCategory}/>
     <NewsBoard category={category}/>
    </div>
  )
}

export default App
