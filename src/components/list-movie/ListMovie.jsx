import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../feedback/Loading"
import MovieCard from "../card/MovieCard"
import { Link } from "react-router-dom"
import { formatDate } from "../../helper/Helper"

// eslint-disable-next-line react/prop-types
const ListMovie = ({ title, urlMovies }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const token = import.meta.env.VITE_TMDB_API_RAT

  const getData = async () => {
    setIsLoading(true)
    axios
      .get(urlMovies, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data.results.slice(0, 15)
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

  return (
    <div className="flex flex-col w-full lg:gap-7">
      <div className="flex flex-row justify-between">
        <div className="flex-row flex gap-4 text-soft-white items-end">
          <h2>{title}</h2>
          <Link><h4>explore all</h4></Link>
        </div>

        <div className="right"></div>
      </div>

      <div className={`${isLoading && 'justify-center items-center'} flex flex-row w-full min-h-60 gap-6 overflow-x-auto lg:pb-20`}>
        {isLoading ? (
          <Loading />
        ) : (
          data.map((item) => (
            <MovieCard
              key={item.id}
              id={item.id}
              poster={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              title={item.title}
              rate={item.vote_average * 10}
              votes={item.vote_count}
              date={formatDate(item.release_date)}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default ListMovie
