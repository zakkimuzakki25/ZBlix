import PrimaryButton from "../button/PrimaryButton"
import nextArrow from "../../assets/icon/NextArrow.svg"
import prevArrow from "../../assets/icon/PrevArrow.svg"
import iconPlay from "../../assets/icon/Play.svg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { formatDate } from "../../helper/Helper"
import CircularPercentageWithLabel from "../feedback/CircularPercentageWithLabel"
import Loading from "../feedback/Loading"
import Trailer from "../play/Trailer"

const TrendingSlider = () => {
  const token = import.meta.env.VITE_TMDB_API_RAT

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isPlayTrailer, setIsPlayTrailer] = useState(false)
  const [selectedID, setSelectedID] = useState(null)

  const getData = async () => {
    setIsLoading(true)
    axios
      .get("https://api.themoviedb.org/3/trending/movie/day?language=id-ID", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data.results.slice(0, 10)
        setData(data)
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 3500,
    speed: 750,
    nextArrow: <img src={nextArrow} />,
    prevArrow: <img src={prevArrow} />,
  }

  return (
    <div
      className="flex flex-row w-full h-fit lg:gap-5 lg:py-2 justify-center"
    >
      {isPlayTrailer && <Trailer handleClose={setIsPlayTrailer} id={selectedID} />}
      <div className="lg:w-1100 lg:h-550">
        {isLoading ? (
          <Loading />
        ) : (
          <Slider {...settings}>
            {data.map((item, index) => (
              <Link key={index} to={`/movie/${item.id}`}>
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                  }}
                  className="lg:w-1100 lg:h-550 bg-cover bg-center hover:animate-scale-110"
                >
                  <div className="flex flex-row w-full h-full bg-linear-top-black-1 lg:gap-9 lg:px-12 lg:py-10 items-end shadow-spread">
                    <div
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})`,
                      }}
                      className="lg:w-200 lg:h-300 bg-cover bg-center shadow-spread flex-shrink-0"
                    />
                    <div className="flex flex-col w-full lg:py-3.5 lg:gap-9">
                      <div className="flex flex-col w-full lg:gap-2.5 text-white-1 drop-shadow-2xl">
                        <h1
                          style={{ lineHeight: "1.2" }}
                          className="font-bold"
                        >
                          {item.title}
                          {item.title !== item.original_title &&
                            ` (${item.original_title})`}
                        </h1>
                        <h4
                          style={{ lineHeight: "1.1" }}
                          className="font-semibold"
                        >
                          {formatDate(item.release_date)}
                        </h4>
                        <p className="font-normal">{item.overview}</p>
                        <div className="flex flex-row gap-3 items-center">
                          <CircularPercentageWithLabel
                            value={item.vote_average * 10}
                          />
                          <h7>{item.vote_count} votes</h7>
                        </div>
                      </div>

                      <PrimaryButton
                        name="Trailer"
                        width={"fit"}
                        icon={iconPlay}
                        handle={() => {
                          setIsPlayTrailer(!isPlayTrailer)
                          setSelectedID(item.id)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        )}
      </div>
    </div>
  )
}

export default TrendingSlider
