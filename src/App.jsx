import "./App.css";
import Categories from "./component/Categories";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import NewProducts from "./component/NewProducts";
import Reviews from "./component/Reviews";

function App() {
  return (
    <div className="min-h-screen bg-[#E7E7E3]">
      <div className="w-7xl items-center mx-auto">
        <Navbar />
        <HeroSection />
        <NewProducts />
        <Categories />
        <Reviews />
      </div>
    </div>
  );
}

export default App;
