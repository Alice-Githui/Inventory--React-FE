import './App.css';
import Inventory from "../src/components/inv";
import AllInventory from "../src/components/allinventory"

function App() {
  return (
    <div className="App">
      <h1>Inventory Tracker in React</h1>

      {/* <Inventory p="application"/> */}
      <AllInventory />
    </div>
  );
}

export default App;
