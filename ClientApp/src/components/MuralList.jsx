import React from 'react'
import { Link } from 'react-router-dom'

const MuralList = props => {
  let { results } = props
  return (
    <ul>
      {results.map(mural => {
        return (
          <li>
            {/* this is displaying search results to the screen */}
            <Link to={`/murals/${mural.id}`} className="list-to-map-link">
              {mural.artistName} - {mural.fullAddress}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default MuralList
