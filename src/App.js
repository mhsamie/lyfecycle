import "./App.css";
import AboutSection from "./components/AboutSection";
import ButtomStartSection from "./components/BottomStart";
import Banner from "./components/Banner";
import BlogSection from "./components/BlogComponent";
import LocationSection from "./components/Location";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import TrainersSection from "./components/TrainersSection";
import UpCommingSection from "./components/UpCommingSection";
import CommentSection from "./container/CommentSection";
import Footer from "./components/Footer";

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
        <CommentSection />

        {/* <PrimeryBtn /> */}

        <BlogSection />
        <ButtomStartSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
