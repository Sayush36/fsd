// const div=document.getElementsByTagName("div");
// div[0].innerText="hello world";
// div[0].style.color="green";
// const container=document.getElementsByClassName("container");
// console.log(container);
// container[0].innerHTML='<h2 style="color:blue">welcome to abes engineering college</h2>';
// const h1=document.createElement("h1");
// h1.innerText="computer science and engineering";
// h1.style.color="red";
// container[0].appendChild(h1);
// const button=document.getElementById("btn");
// const display=document.getElementsByClassName("disp");
// display[0].innerHTML="<h3>data loading</h3>"
// console.log(display)
// button.addEventListener("click",()=>{
  
//    setTimeout(()=>{
//    container[0].appendChild(image);
//     display[0].innerHTML="";
//    },2000)
// })
// const image=document.createElement("img");
// image.src="https://img-cdn.pixlr.com/image-generator/demo/pixlr-image-generator-example-3.webp";
// image.setAttribute("height","300px");
// image.setAttribute("width","300px");
// function msg()
// {
//    console.log("hello world")
// }
// console.log("start")
// setTimeout(msg,1000);
// console.log("end");
// function msg1(mymsg)
// {
//    console.log("hello "+mymsg)
// }
// function msghandler(arg,clbk)
// {
//    const data=clbk(arg);
//    console.log(data);
// }
// const arr=["amit","rahul","bansal"];
// arr.forEach((element)=>{
//    msghandler(element,msg1);
// })
const mypromide=new Promise((resolve,reject)=>{
   const password="789.bhkjh";
   if(password.length>8){
      resolve("strong password");
   }
   else{
      reject("weak password");
   }
})
// console.log(mypromide);
// mypromide.then((msg)=>{
//    console.log(msg);
// }).catch(err=>{
//    console.log(err);
// }).finally((msg)=>{
//    console.log("task completed");
// })
// async function promisehandler(){
//    try{
//       const data=await mypromide;
//       console.log(data);

//    }
//    catch(err){
//       console.log(err);
//    }
// }
const btn=document.getElementById("btn");
async function getdata(){
   console.log("enter inside function");
   const response=await fetch ("https://fakestoreapi.com/products");
   const jsondata=await response.json();
   console.log(jsondata);
   console.log(jsondata[0].title);
   const title=document.createElement("h3");
   title.innerText=jsondata[0].title;
   const container=document.getElementsByClassName("container");
   const image=document.createElement("img");
   image.src=jsondata[0].image;
   image.setAttribute("height","300px");
   image.setAttribute("width","300px");
   const price=document.createElement("h4");
   price.innerText=jsondata[0].price;
         container[0].appendChild(title);
      container[0].appendChild(image);
      container[0].appendChild(price);
}
btn.addEventListener("click",getdata);