
import React from 'react'
import { Star, Film } from 'lucide-react'

const Hero = ({ movie }) => {
  if (!movie) return null

  return (
    <div
      id='home'
      className='relative min-h-[500px] rounded-2xl overflow-hidden flex items-center'
      style={{
        backgroundImage: `linear-gradient(90deg, #090B10 5%, rgba(9,11,16,0.8) 60%, transparent), url(${movie.poster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='relative p-8 md:p-16 max-w-[650px]'>
        <span className='bg-[#F79841] text-black px-3 py-2 rounded-lg text-xs font-bold'>
          TAVSIYA ETAMIZ
        </span>

        <p className='text-gray-300 flex items-center gap-2 mt-6'>
          <Film size={17} />
          {movie.genre}
        </p>

        <h1 className='text-white text-4xl md:text-6xl font-bold mt-4'>
          {movie.title}
        </h1>

        <div className='flex gap-5 mt-5 text-gray-300'>
          <span>{movie.year}</span>

          <span className='flex items-center gap-1 text-[#F79841]'>
            <Star size={17} fill='#F79841' />
            {movie.rating}
          </span>

          <span>{movie.duration}</span>
        </div>

        <p className='text-gray-300 mt-6 leading-7'>
          {movie.description}
        </p>
      </div>
    </div>
  )
}

export default Hero
