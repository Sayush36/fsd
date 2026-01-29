import React,{useEffect, useState} from "react";
import Components from "./Components";
function Dashboard(){
  const [data,setData]=useState([]);
useEffect(()=>{
   async function fetchData(){
    const serverResponse=await fetch("https://fakestoreapi.com/products");
    setData(await serverResponse.json());
   }
   fetchData();
},[])
const [total,setTotal]=useState(0);
const [item,setItem]=useState([]);
const handleclick=(a,b)=>{
  setItem([...item,a]);
  console.log(item);
  
  setTotal(total+b);
}

const value=item.length===0?"No item in cart":null;
  return <>
  <div className="cart">
    
    <h3>cart</h3>
    <h3>{value}</h3> 
    {item.map((ele)=><div >
      <h3>{ele.title}</h3>
      <h3>Price:{ele.price}</h3>
     
    </div>)}
    <h3>Total price:{total}</h3>
  </div>
  <Components arr={data} handleclick={handleclick}/></>;
}
export default Dashboard;