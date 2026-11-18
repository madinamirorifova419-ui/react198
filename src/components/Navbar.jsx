
import React from 'react'
import { Search, Heart, Clapperboard } from 'lucide-react'

const Navbar = ({ search, setSearch, favoritesCount }) => {
  return (
    <div className='w-full bg-[#090B10] px-6 md:px-12 py-5'>
      <div className='max-w-[1400px] mx-auto flex items-center justify-between gap-5'>

        <div className='flex items-center gap-3'>
          <div className='w-11 h-11 bg-[#F79841] rounded-xl flex items-center justify-center'>
            <Clapperboard size={25} className='text-black' />
          </div>

          <h1 className='text-white text-2xl font-bold'>
            CINE<span className='text-[#F79841]'>VERSE</span>
          </h1>
        </div>

        <div className='hidden md:flex items-center gap-8'>
          <a href='#home' className='text-[#F79841]'>Bosh sahifa</a>
          <a href='#categories' className='text-gray-400 hover:text-white'>Kategoriyalar</a>
          <a href='#movies' className='text-gray-400 hover:text-white'>Kinolar</a>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2 bg-[#191C24] rounded-xl px-3 py-3'>
            <Search size={18} className='text-gray-400' />

            <input
              type='text'
              placeholder='Kino qidirish...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='bg-transparent outline-none text-white w-28 md:w-40 text-sm'
            />
          </div>

          <a href='#favorites' className='relative text-white'>
            <Heart size={24} />

            {favoritesCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-[#F79841] text-black text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                {favoritesCount}
              </span>
            )}
          </a>
        </div>

      </div>
    </div>
  )
}

export default Navbar
