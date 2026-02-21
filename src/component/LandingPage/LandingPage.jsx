import Categories from "../Categories";
import HeroSection from "../HeroSection";
import NewProducts from "../NewProducts";
import Reviews from "../Reviews";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <NewProducts />
      <Categories />
      <Reviews />
    </div>
  );
};

export default LandingPage;
