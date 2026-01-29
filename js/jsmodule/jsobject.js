//console.log("hello")
const student={
  name:"Ram",
  age:20,
  branch:"cse-a",
  language:[{
    lang1:"java",
    lang2:"python"
  },{
    database1:"mysql",
    database2:"oracle",
    database3:"mongodb"
  },{
    framework1:"hibernate",
    framework2:"spring"
  }]
}
student.college="Abes Engineering college";
console.log(student)
console.log(student.language[2].framework1)