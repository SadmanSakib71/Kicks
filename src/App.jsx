import "./App.css";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import Categories from "./component/Categories";

function App() {
  return (
    <div className="min-h-screen bg-[#E7E7E3]">
      <div className="w-7xl items-center mx-auto">
        <Navbar />
        <HeroSection />
        <Categories />
      </div>
    </div>
  );
}

export default App;
