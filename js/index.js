// console.log("hello world")
// var a=23
// console.log("a="+a);
//console.log(a)
// var a=12;
// if(a>5){
//   //a=a+20;
//   a=34
//   console.log("a="+a)
// }
// console.log("hii="+a)
// let a=12;
// if(a>5){
//   //a=a+20;
//   let a=34
//   console.log("a="+a)
// }
// console.log("hii="+a)
// function info(name,age,branch){
//   console.log("hi:"+name+" ,"+"age:"+age+","+"branch:"+branch);
//   return `hi ${name}, myage=${age},branch=${branch}`;

// }
// const hello=info("ayush",20,"cse")
// console.log(hello)
// const information=(name,age,branch)=>{
//   return `hi ${name}, myage=${age},branch=${branch}`;
// }
// console.log(information("Ayush",20,"c.s.e"))
// const info=()=>{
//   return"hi:Ayush MYAGE=20 BRANCH=CSE";
// }
// console.log(info())
// function info(str="hii")
// {
//   console.log("hello"+str);
// }
// info("how r u");
// (function(){
//   console.log("hi inside the function")
// })();
// setTimeout(function(){console.log("hiii")},1000)
function selectlanguage(lang="javascript"){
  let data;
  if(lang=="java")
  {
    function javacompiler(){
      return "java compiler calling";
    }
    data=javacompiler();
  }
  else if(lang=="c")
  {
    function cCompiler(){
      return "c compiler calling";
    }
   data=cCompiler();
  }
  else if(lang==="javascript")
  {
    function default1(){
      return "javascript calling";
    }
    data=default1();
  }
  else{
    data="language not supported";
  }
  return data;
  
}
console.log(selectlanguage("java"))
console.log(selectlanguage("python"))
console.log(selectlanguage())