import { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/feedback/Loading";
import { formatDate } from "../../helper/Helper";
import Trailer from "../../components/play/Trailer";
import CircularWithValueLabel from "../../components/feedback/CircularPercentageWithLabel";
import TransparentButton from "../../components/button/TransparentButton";
import iconPlay from '../../assets/icon/Play.svg'

const DetailMovie = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isPlayTrailer, setIsPlayTrailer] = useState(false);
  const token = import.meta.env.VITE_TMDB_API_RAT;

  const getData = async () => {
    setIsLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data;
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleWatchNowClick = () => {
    const targetElement = document.getElementById("movie-play");
  
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, token]);

  return (
    <div className="flex-col w-full bg-black-1">
      <Navbar />

      {isPlayTrailer && <Trailer handleClose={setIsPlayTrailer} id={data.id} />}

      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          // backgroundPositionY: '-50%'
        }}
        className="w-full lg:h-banner-lg bg-cover lg:border-b-4 border-red"
      >
        {isLoading ? (
          <Loading />
        ) : (
          <div className="w-full h-full flex flex-col bg-linear-top-black-0.9 lg:px-100 lg:pt-120">
            <div className="flex flex-col w-full h-fit lg:py-6 lg:px-10 justify-center">
              <div className="flex flex-row lg:w-full lg:h-520 lg:gap-9 lg:py-8 items-end">
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
                  }}
                  className="lg:w-300 lg:h-450 bg-cover bg-center flex-shrink-0 shadow-spread"
                />

                <div className="flex flex-col w-full lg:py-4 lg:gap-7">
                  <div className="flex flex-col w-full lg:gap-2.5 text-white-1 drop-shadow-2xl">
                    <h1 style={{ lineHeight: "1.2" }} className="font-bold">
                      {data.title}
                      {data.title !== data.original_title &&
                        ` (${data.original_title})`}
                    </h1>
                    <h4 style={{ lineHeight: "1.1" }} className="font-semibold">
                      {formatDate(data.release_date)}
                    </h4>
                    <p className="font-normal">{data.overview}</p>
                    <div className="flex flex-row gap-3 items-center">
                      <CircularWithValueLabel value={data.vote_average * 10} />
                      <h7>{data.vote_count} votes</h7>
                    </div>
                  </div>

                  <TransparentButton
                        name="TRAILER"
                        icon={iconPlay}
                        handle={() => {
                          setIsPlayTrailer(!isPlayTrailer)
                        }}
                      />
                </div>
              </div>

              <div className="lg:w-300 text-center">
                <button onClick={handleWatchNowClick}>
                  <h6 className="w-fit font-bold text-center text-white-1 hover:brightness-75 transition-all">
                    WATCH NOW
                  </h6>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div id='movie-play' className="w-full lg:h-banner-lg bg-center bg-cover bg-black-1">
          
      </div>
    </div>
  );
};

export default DetailMovie;
