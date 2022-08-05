import "./App.css";
import AboutSection from "./components/AboutSection";

import Banner from "./components/Banner";
import LocationSection from "./components/Location";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import TrainersSection from "./components/TrainersSection";
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
        <TrainersSection />
        <LocationSection />
      </main>
    </div>
  );
}

export default App;
