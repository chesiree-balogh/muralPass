import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <>
      <section className="search-container">
        <input type="search" />
        <button>Search</button>
      </section>
      <main>
        <ul></ul>
        <section className="no-results">
          No murals? <Link to="/add"> Report a mural.</Link>
        </section>
      </main>
    </>
  )
}

export default Search
