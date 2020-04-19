import React from 'react'

const MuralList = props => {
  let { results } = props
  return (
    <ul>
      {results.map(mural => {
        return <li>{mural.artistName}</li>
      })}
    </ul>
  )
}

export default MuralList
