import "./App.css";
import AboutSection from "./components/AboutSection";

import Banner from "./components/Banner";
import LocationSection from "./components/Location";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import TrainersSection from "./components/TrainersSection";
import UpCommingSection from "./components/UpCommingSection";
import CommentSection from "./container/CommentSection";

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
        {/* <CommentSection /> */}
      </main>
    </div>
  );
}

export default App;
