import "./App.css"
function Components({arr,handleclick}){
  return<><div className="container">
  {arr.map((item)=><div className="box" key={item.id}>
    
    <h2 className="title">Title:{item.title}</h2>

    <img src={item.image} alt={item.title} height="200px" width="200px" className="img"/>
    <h2 className="title">Price:{item.price}</h2>
    <h2 className="title1">Category:{item.category}</h2>
    <h2 className="title1">Description:{item.description}</h2>
    <button onClick={()=>handleclick(item,item.price)
    }>ADD TO CART</button>

  </div>)}</div></>
}
export default Components;