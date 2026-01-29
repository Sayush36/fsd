import './index.css';
import Pop from './Pop.jsx';

function App() {
  const data=[{
    title:"c++",
    publisher:"Bipul",
    price:500
  },{
    title:"java",
    publisher:"Arpit",
    price:600
  },{
    title:"python",
    publisher:"govind",
    price:700
  }]

  return (
    <>
      {/* <div id="card">
        <img src="https://thumbs.dreamstime.com/b/colorful-open-book-d-render-pastel-rainbow-pages-384024627.jpg" id="h1" ></img>
        <h3>{item.title}</h3>
        <h3>{item.publisher}</h3>
        <h3>{item.price}</h3>

        <button>add to cart</button>

        
      </div> */}
      {data.map((item, index) => (
        <Pop key={index}  item={item}/>

      ))}
      
    </>
  )
}

export default App
