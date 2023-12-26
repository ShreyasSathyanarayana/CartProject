// import Todo from "./components/Todo";
// import Addtodo from "./components/Addtodo";
import AddToCart from "./cart-components/AddToCart";
import CartList from "./cart-components/CartList";
import { Add } from "./cart-components/Add";
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import "./cart-components/CartList.css"
import { data } from "./cart-components/Data";
function App(){
  // localStorage.setItem("cart-item",JSON.stringify(data))
  return (
    <Router>
      <div>
      <header className=" Cart-header text-center bg-dark-subtle p-2" style={{backgroundImage:" background-image: linear-gradient(to left,gold,purple);"}}>
            <h2 className="text-white">Shreyas Shoping Mart</h2>
            <br />
            {/* <Link to="/home"> <button className="btn btn-primary">Create Task</button></Link> */}
            <div>
            <Link to="/addtocart" className="btn btn-warning text-white">Cart-List</Link><Link to="/" className="btn btn-danger ms-1">Shopping</Link><Link to="/add-item" className="btn btn-success ms-1">Add Product</Link>
            </div>
      </header>
         <Routes>
         <Route path="/" element={CartList}/>
         <Route path="/add-item" element={Add}/>
         <Route path="/addtocart"  element={AddToCart}/>
         
         </Routes>
    </div>
    </Router>
  )
}

export default App;