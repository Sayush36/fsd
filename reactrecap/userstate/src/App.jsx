import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image from '/image.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [height,setHeight]=useState(200)
  const[width,setWidth]=useState(200)
  const[red,setRed]=useState(0);
  const[green,setGreen]=useState(0);
  const[blue,setBlue]=useState(0);
  const[imgRotate,setImgRotate]=useState(0)
  function increaseHeight(){
    setHeight(height+1)
  }
  function increaseWidth(){
    setWidth(width+1)
  }
  function decreaseHeight(){
    setHeight(height-1)
  }
  function decreaseWidth(){
    setWidth(width-1)
  }
  function changebgcolor(){
    
    setRed(Math.random()*256)
    setGreen(Math.random()*256)
    setBlue(Math.random()*256)
  }
  function Imagerotate(){
    setImgRotate(imgRotate+30);
  }
  return (
    <>
      <div style={{backgroundColor:`rgb(${red},${blue},${green})`,transform:`rotate(${imgRotate}deg)`}}>
        <img src={image} height={height} width={width} />
      </div>
      <button onClick={increaseHeight}>Increase Height</button>
      <button onClick={decreaseHeight}>Decrease Height</button>
      <button onClick={increaseWidth}>Increse Width</button>
      <button onClick={decreaseWidth}>Decrease Width</button>
      <button onClick={changebgcolor}>Change color</button>
      <button onClick={Imagerotate}>ROTATE IMAGE</button>
      <div>
        <h4>`red:${red}</h4>
        <h4>blue:${blue}</h4>
        <h4>green:${green}</h4>
        <h4>ROTATE:${imgRotate}</h4>
      </div>
    </>
  )
}

export default App
