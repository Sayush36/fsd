import { Link } from "react-router-dom";

function Mainlayout(){
  return(<div>
    <nav>
      <Link to='/login' style={{fontSize:'30px',color:'red',marginLeft:'200px'}}>Login</Link>
      <Link to='/registration' style={{fontSize:'30px',color:'green',marginLeft:'300px'}}>Register</Link>
    </nav>
  </div>);
}
export default Mainlayout;