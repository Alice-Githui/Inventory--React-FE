import './App.css';
import Inventory from "../src/components/inv";
import AllInventory from "../src/components/allinventory";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Inventory Tracker in React</h1>

        {/* <Inventory p="application"/> */}
        {/* <AllInventory /> */}
        <Routes>
          <Route path="/" element={<AllInventory/>}/>
        </Routes>
      </div>
    </Router>
      );
}

export default App;
