import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <main className="searchPage">
      <section className="search-container">
        <input type="search" />
        <button>Search</button>
      </section>
      <main>
        <ul></ul>
        <section className="no-results">
          No murals?
          <Link to="/add" className="reportAMural">
            Log a new mural
          </Link>
        </section>
      </main>
    </main>
  )
}

export default Search
