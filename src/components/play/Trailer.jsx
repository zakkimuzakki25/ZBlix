import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../feedback/Loading";

// eslint-disable-next-line react/prop-types
const Trailer = ({ handleClose, id }) => {
  const [videoKey, setVideoKey] = useState("");
  const [loading, setLoading] = useState(true);

  const clickOutsideHandle = () => {
    handleClose(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
            import.meta.env.VITE_TMDB_APIKEY
          }`
        );

        // Ambil kunci video pertama dari respons
        const key = response.data.results[0]?.key;
        setVideoKey(key);
        setLoading(false); // Setelah mendapatkan kunci video, hentikan loading
      } catch (error) {
        console.error("Error fetching video data:", error);
        setLoading(false); // Hentikan loading jika terjadi kesalahan
      }
    };

    fetchData();
  }, [id]);

  return (
    <div
      onClick={clickOutsideHandle}
      className="fixed top-0 w-screen h-screen flex justify-center items-center bg-black-0.85 z-100"
    >
      {loading ? (
        <Loading />
      ) : (
        <iframe
          title="trailer"
          width="1040"
          height="520"
          src={`https://www.youtube.com/embed/${videoKey}?controls=1&autoplay=1`}
          allowFullScreen
          id="trailerIframe"
        />
      )}
    </div>
  );
};

export default Trailer;
