import "./App.css";

import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Banner />
        <Products />
      </main>
    </div>
  );
}

export default App;
