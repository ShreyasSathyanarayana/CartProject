import AddToCart from "./cart-components/AddToCart";
import CartList from "./cart-components/CartList";
import Add from "./cart-components/Add";
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import "./cart-components/CartList.css";

function App() {
  // localStorage.setItem("cart-item", JSON.stringify(data))
  return (
    <Router>
      <div>
        <header className="Cart-header text-center bg-dark-subtle p-2" style={{ backgroundImage: "linear-gradient(to left,gold,purple)" }}>
          <h2 className="text-white">Shreyas Shopping Mart</h2>
          <br />
          <div>
            <Link to="/addtocart" className="btn btn-warning text-white">Cart-List</Link>
            <Link to="/" className="btn btn-danger ms-1">Shopping</Link>
            <Link to="/add-item" className="btn btn-success ms-1">Add Product</Link>
          </div>
        </header>
        <Switch>
          <Route path="/add-item" element={<Add />} />
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/" element={<CartList />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
