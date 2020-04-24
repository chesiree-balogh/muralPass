import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EmptyMuralList from '../components/EmptyMuralList'
import MuralList from '../components/MuralList'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  // its a get cuz we want to get data/info
  const searchForMurals = async () => {
    const resp = await axios.get(`/api/search/murals?searchTerm=${searchTerm}`)
    console.log(resp.data)
    setResults(resp.data)
  }
  // maybe change this to search by city? instead of artist...
  return (
    <div className="searchPage">
      <section className="search-container">
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={searchForMurals}>Search By Artist, City or ZIP</button>
      </section>
      <main>
        {results.length > 0 ? (
          <MuralList results={results} />
        ) : (
          <EmptyMuralList />
        )}
      </main>
    </div>
  )
}

export default Search
