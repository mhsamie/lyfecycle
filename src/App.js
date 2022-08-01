import "./App.css";
import AboutSection from "./components/AboutSection";

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
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
