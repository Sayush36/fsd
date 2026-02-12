async function getdata(){
  console.log("starting ....");
  const result=await someAsyncOperation();
  console.log("result:",result);
  return result;
}
function someAsyncOperation(){
  return new Promise((resolve)=>{
    setTimeout(()=>{resolve("operation completed")},1000);
  })
}
getdata().then(result=>console.log("final data:",result)).catch(err=>console.error(err));