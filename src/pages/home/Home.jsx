import TrendingSlider from "../../components/list-movie/TrendingSlider";
import Navbar from "../../layout/Navbar";

const Home = () => {
  return (
    <div className="flex-col w-full">
      <Navbar />

      <div className="w-full lg:h-banner-lg bg-center bg-cover bg-banner-home lg:border-b-4 border-red">
        <div className="w-full h-full bg-linear-top-black-0.75 lg:px-50 lg:py-120">
          <TrendingSlider />
        </div>
      </div>

      <div className="w-full lg:h-banner-lg bg-center bg-cover bg-black-1">

      </div>

    </div>
  );
};

export default Home;
