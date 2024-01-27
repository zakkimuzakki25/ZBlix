import PrimaryButton from "../button/PrimaryButton";
import arrowIcon from "../../assets/icon/Arrow.svg";
import iconPlay from "../../assets/icon/Play.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { formatDate } from "../../helper/Helper";

const TrendingSlider = () => {
  const token = import.meta.env.VITE_TMDB_API_RAT;

  const [data, setData] = useState([]);

  const getData = async () => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/day?language=en-US", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setData(res.data.results.slice(0, 10));
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePlay = () => {};

  useEffect(() => {
    getData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 750,
  };

  return (
    <div className="flex flex-row w-full h-fit lg:gap-5 lg:py-6 justify-center">
      <img src={arrowIcon} className="lg:w-75 lg:h-75 " />

      <div className="lg:w-1040 lg:h-520">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <Link key={index}>
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                  }}
                  className="lg:w-1040 lg:h-520 bg-cover bg-center hover:animate-scale-110"
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
                        <h1 style={{ lineHeight: "1.2" }} className="font-bold">
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
                        <div className="star"></div>
                      </div>

                      <PrimaryButton
                        name="Trailer"
                        width={"fit"}
                        icon={iconPlay}
                        handle={handlePlay}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>

      <img src={arrowIcon} className="lg:w-75 lg:h-75 rotate-180" />
    </div>
  );
};

export default TrendingSlider;
