import React from 'react'
import { Link } from 'react-router-dom'

const EmptyMuralList = () => {
  return (
    <div>
      <section className="no-results">
        No murals?
        <Link to="/add" className="reportAMural">
          Log a new mural
        </Link>
      </section>
    </div>
  )
}

export default EmptyMuralList
