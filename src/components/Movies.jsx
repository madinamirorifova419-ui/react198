
import React from 'react'
import { Star, Clock, Heart } from 'lucide-react'

const Movies = ({ movies, favorites, onFavorite }) => {
  return (
    <div id='movies' className='py-10'>
      <div className='mb-7'>
        <h2 className='text-white text-3xl font-bold'>
          Barcha kinolar
        </h2>

        <p className='text-gray-400 mt-2'>
          {movies.length} ta kino topildi
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {movies.map((movie) => {
          const bor = favorites.some((item) => item.id === movie.id)

          return (
            <div
              key={movie.id}
              className='bg-[#191C24] rounded-2xl overflow-hidden border border-[#292D38]'
            >
              <div className='relative h-[260px]'>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className='w-full h-full object-cover'
                />

                <button
                  onClick={() => onFavorite(movie)}
                  className='absolute top-3 right-3 bg-black/70 p-2 rounded-full'
                >
                  <Heart
                    size={22}
                    color={bor ? '#F79841' : 'white'}
                    fill={bor ? '#F79841' : 'none'}
                  />
                </button>
              </div>

              <div className='p-4'>
                <h3 className='text-white font-bold truncate'>
                  {movie.title}
                </h3>

                <div className='flex justify-between items-center mt-3 text-xs text-gray-400'>
                  <span>{movie.year}</span>

                  <span className='flex items-center gap-1 text-[#F79841]'>
                    <Star size={14} fill='#F79841' />
                    {movie.rating}
                  </span>
                </div>

                <p className='text-gray-400 text-xs mt-3'>
                  {movie.genre}
                </p>

                <p className='text-gray-400 text-xs mt-2 flex items-center gap-1'>
                  <Clock size={13} />
                  {movie.duration}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {movies.length === 0 && (
        <p className='text-gray-400 text-center py-10'>
          Kino topilmadi
        </p>
      )}
    </div>
  )
}

export default Movies
