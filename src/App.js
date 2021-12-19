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
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/sidebar';
import { Container, Row, Col } from "react-bootstrap";
import SellProduct from './components/sellproduct';
import LeftBar from './components/leftbar';


function App() {
  return (
    <Router>
      <div className="App">

        <Container fluid id="app-container">
          <Row>
            <Header />
            <Routes>
              <Route path="/" element={<AllInventory />}></Route>
              <Route path="product/:id" element={<OneProduct />}></Route>
              <Route path="product/new" element={<AddNewProduct />}></Route>
              <Route path="product/sell/:id" element={<SellProduct />}></Route>
            </Routes>

          </Row>
        </Container>


      </div>
    </Router>
  );
}

export default App;
