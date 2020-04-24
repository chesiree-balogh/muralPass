import React from 'react'
import { Link } from 'react-router-dom'

const EmptyMuralList = () => {
  return (
    <div>
      <section className="no-results">
        <h2>No murals?</h2>
        <Link to="/add" className="reportAMural">
          Add Murals Here
        </Link>
      </section>
    </div>
  )
}

export default EmptyMuralList
