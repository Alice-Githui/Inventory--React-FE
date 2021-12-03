import './App.css';
import Inventory from "../src/components/inv";
import AllInventory from "../src/components/allinventory";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import OneProduct from "./components/oneproduct";
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
       <Header />
        <Routes>
          <Route path="/" element={<AllInventory />}></Route>
          <Route path="product/:id" element= {<OneProduct />}></Route>
        </Routes>
      </div>
    </Router>
      );
}

export default App;
