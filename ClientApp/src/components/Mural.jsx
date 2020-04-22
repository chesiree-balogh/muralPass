import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

// this pages job is to displaying the mural information

const MuralDetails = props => {
  const { mural } = props
  return (
    <main className="mural-details">
      <img src="http://placekitten.com/600/400" alt={mural.artistName} />
      <section>
        <h1>{mural.artistName}</h1>
        <button className="directions-link">
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </button>
        <p className="longitudeSection">longitude:</p>
        <p className="longitudeNumbers">{mural.longitude}</p>

        <p className="latitudeSection">latitude</p>
        <p className="latitudeNumbers">{mural.latitude}</p>

        <p className="fullAddressDis">Full address:</p>
        <p className="fullAddress">{mural.fullAddress}</p>

        <p className="muralDescriptionSection">Mural Description:</p>
        <p className="muralDescription">{mural.muralDescription}</p>
      </section>
    </main>
  )
}

export default MuralDetails
