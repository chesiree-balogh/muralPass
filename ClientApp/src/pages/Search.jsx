import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // its a get cuz we want to get data/info
  const searchForMurals = async () => {
    const resp = await axios.get(`/api/search/murals?searchTerm=${searchTerm}`)
    console.log(resp.data)
  }
  // maybe change this to search by city? instead of artist...
  return (
    <>
      <section className="search-container">
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={searchForMurals}>Search Artist Names</button>
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
    </>
  )
}

export default Search
