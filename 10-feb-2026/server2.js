const fs=require("fs");
async function createFileExample(){
  try{
    const data=await fs.promises.writeFile("myfile.txt","Hello, this is a sample file!","utf8");
    console.log("File created successfully");
  }
  catch(err){
    console.error("Error creating file:",err);
  }

}
createFileExample();
async function appendToFileExample(){
  try{
    const data1=await fs.promises.appendFile("myfile.txt","\nThis line is appended to the file.","utf8");
    console.log("Data appended successfully");
  }
  catch(err){
    console.error("Error appending to file:",err);
  }
}
appendToFileExample();