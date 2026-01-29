const parent=document.getElementById("parents");
//console.log(parent);
const root=ReactDOM.createRoot(parent);
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
}

]
const h2=React.createElement("h2",{style:{color:"blue"}},"Welcome to React");

const h21 = React.createElement(
  "div",
  null,
  React.createElement("img", { src: "" }),
  React.createElement("h2", null, "Model no:1234"),
  React.createElement("h2", null, "Price:220"),
  React.createElement("h2", null, "Description:Android Phone"),
  React.createElement("button", null, "Add to cart")
);


root.render(h21);