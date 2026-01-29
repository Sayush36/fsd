
function Pop({item}) {
  
   return (
    <>
    <div class="c1">
    <div id="card" >
        <img src="https://thumbs.dreamstime.com/b/colorful-open-book-d-render-pastel-rainbow-pages-384024627.jpg" id="h1" ></img>
        <h3>{item.title}</h3>
        <h3>{item.publisher}</h3>
        <h3>{item.price}</h3>

        <button>add to cart</button>

        
      </div>
      </div>
      
    </>
  );
}
export default Pop;