// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import CircularWithValueLabel from '../feedback/CircularPercentageWithLabel'

// eslint-disable-next-line react/prop-types
const MovieCard = ({title, rate, votes, poster, id, date}) => {
  return (
    <Link to={`/movie/${id}`} className='flex flex-col lg:w-200 shrink-0 gap-2 text-soft-white'>
        <div className="lg:w-full lg:h-300 overflow-hidden">
            <img className="lg:w-full lg:h-full object-cover hover:scale-110 transition-transform" src={poster} alt={title} />
        </div>
        
        <div className="flex flex-col lg:gap-0.5">
            <h6 className='font-bold text-ellipsis'>{title}</h6>
            <h6 className='text-ellipsis text-soft-white brightness-50'>{date}</h6>
        </div>

        <div className="flex flex-row gap-3 lg:mt-1 items-center">
            <CircularWithValueLabel value={rate} />
            <h7>{votes} votes</h7>
        </div>
    </Link>
  )
}

export default MovieCard