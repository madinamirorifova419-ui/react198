
import React from 'react'

const Categories = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div id='categories' className='w-full py-10'>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-5 mb-7'>
        <div>
          <p className='text-[#F79841] text-sm font-semibold mb-2'>
            KINO JANRLARI
          </p>
          <h2 className='text-white text-3xl font-bold'>
            Kategoriyalar
          </h2>
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-xl text-sm font-semibold transition ${
              activeCategory === category
                ? 'bg-[#F79841] text-black'
                : 'bg-[#191C24] text-gray-300 border border-[#292D38] hover:border-[#F79841] hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Categories
