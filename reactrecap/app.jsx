function app(){
const student=[{
  name:"Arpit",
  age:20,
  branch:"cse",
  college:"ABES engineering"
},{
  name:"BIPUL",
  age:21,
  branch:"CSE",
  college:"ABES engineering"
},{
  name:"CHIRAG",
  age:22,
  branch:"ECE",
  college:"ABES Engineering"
}

]
return <div>
  <h2>ABES EC</h2>
  student.map((item)=
    <iCARD DATA={item}/>
  )
</div>}