
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Movies from './components/Movies'

const App = () => {
  const [movies, setMovies] = useState([])
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState([])
  const [activeCategory, setActiveCategory] = useState('Все')

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data))

    fetch('http://localhost:3001/genres')
      .then((res) => res.json())
      .then((data) => setCategories(data))

    fetch('http://localhost:3001/favorites')
      .then((res) => res.json())
      .then((data) => setFavorites(data))
  }, [])

  const filteredMovies = movies.filter((movie) => {
    const searchMovie = movie.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const categoryMovie =
      activeCategory === 'Все' ||
      movie.genres.includes(activeCategory)

    return searchMovie && categoryMovie
  })

  const handleFavorite = (movie) => {
    const bor = favorites.find((item) => item.id === movie.id)

    if (bor) {
      setFavorites(favorites.filter((item) => item.id !== movie.id))
    } else {
      setFavorites([...favorites, movie])
    }
  }

  return (
    <div className='min-h-screen bg-[#090B10]'>
      <Navbar
        search={search}
        setSearch={setSearch}
        favoritesCount={favorites.length}
      />

      <div className='max-w-[1400px] mx-auto px-6 py-6'>
        {movies.length > 0 && (
          <Hero movie={movies[0]} onMovieClick={() => {}} />
        )}

        <Categories
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <Movies
          movies={filteredMovies}
          favorites={favorites}
          onFavorite={handleFavorite}
          onMovieClick={() => {}}
        />
      </div>
    </div>
  )
}

export default App
