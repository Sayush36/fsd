const myPromise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const sucess=Math.random()>0.5;
    console.log(sucess);
    if(sucess){
      resolve("Promise resolved successfully!");
    }else{
      reject(new Error("operation failed"));
    }
  },1000);
});
myPromise.then(result=>console.log(result)).catch(error=>console.error(error));
