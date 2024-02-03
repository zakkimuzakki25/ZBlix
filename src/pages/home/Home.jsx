import ListMovie from "../../components/list-movie/ListMovie"
import TrendingSlider from "../../components/list-movie/TrendingSlider"
import Navbar from "../../layout/Navbar"

const Home = () => {
  return (
    <div className="flex-col w-full">
      <Navbar />

      <div className="w-full lg:h-banner-lg bg-center bg-cover bg-banner-home lg:border-b-4 border-red">
        <div className="w-full h-full bg-linear-top-black-0.75 lg:px-50 lg:py-120">
          <TrendingSlider />
        </div>
      </div>

      <div className="flex flex-col w-full bg-center bg-cover bg-black-1 gap-8 lg:pt-20 lg:pb-24 lg:px-24">
        <ListMovie title={"Now Playing"} urlMovies={'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'}/>
        <ListMovie title={"Top Rated"} urlMovies={'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'}/>
        <ListMovie title={"Popular"} urlMovies={'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'}/>
        <ListMovie title={"Upcoming"} urlMovies={'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'}/>
      </div>

    </div>
  )
}

export default Home
