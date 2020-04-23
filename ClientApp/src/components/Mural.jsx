import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

// this pages job is to displaying the mural information

const MuralDetails = props => {
  const { mural } = props
  return (
    <main className="mural-details">
      <img src={mural.imageURL} alt={mural.artistName} />
      <section>
        <h1>{mural.artistName}</h1>
        <Link to="/map" className="directions-link">
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </Link>
        <p className="longitudeSection">Longitude:</p>
        <p className="longitudeNumbers">{mural.longitude}</p>

        <p className="latitudeSection">Latitude</p>
        <p className="latitudeNumbers">{mural.latitude}</p>

        <p className="fullAddressDis">Full address:</p>
        <p className="fullAddress">{mural.fullAddress}</p>

        <p className="muralDescriptionSection">Mural Description:</p>
        <p className="muralDescription">{mural.muralDescription}</p>

        <p className="muralIdNumberDis">Mural ID number: {mural.id}</p>
      </section>
    </main>
  )
}

export default MuralDetails
