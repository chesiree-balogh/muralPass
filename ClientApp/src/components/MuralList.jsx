import React from 'react'
import { Link } from 'react-router-dom'

const MuralList = props => {
  let { results } = props
  return (
    <ul>
      {results.map(mural => {
        return (
          <li>
            <Link to="/map" className="list-to-map-link">
              {mural.artistName} - {mural.fullAddress}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default MuralList
