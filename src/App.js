import "./App.css";
import AboutSection from "./components/AboutSection";

import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import UpCommingSection from "./components/UpCommingSection";
function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Banner />
        <Products />
        <AboutSection />
        <UpCommingSection />
      </main>
    </div>
  );
}

export default App;
