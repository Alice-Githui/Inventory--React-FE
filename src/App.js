import './App.css';
import Inventory from "./components/addproduct";
import AllInventory from "../src/components/allinventory";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import OneProduct from "./components/oneproduct";
import Header from './components/Header';
import AddProduct from './components/addproduct';
import AddNewProduct from './components/addnewproduct';

function App() {
  return (
    <Router>
      <div className="App">
       <Header />
        <Routes>
          <Route path="/" element={<AllInventory />}></Route>
          <Route path="product/:id" element= {<OneProduct />}></Route>
          <Route path ="product/new" element = {<AddNewProduct />}></Route>
        </Routes>
      </div>
    </Router>
      );
}

export default App;
