import React from 'react'
import { Link } from 'react-router-dom'

const EmptyMuralList = () => {
  return (
    <div>
      <section className="no-results">
        No murals?
        <Link to="/add" className="reportAMural">
          Add Murals
        </Link>
      </section>
    </div>
  )
}

export default EmptyMuralList
