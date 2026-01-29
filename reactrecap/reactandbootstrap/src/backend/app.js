const express=require('express');
const app=express();
const PORT=7878;
app.get('/msg',(req,res)=>{
  res.send("<h2>hello server is running</h2>");
});
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});