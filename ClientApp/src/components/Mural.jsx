import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

// // this pages job is to displaying the mural information

const MuralDetails = props => {
  const { mural } = props
  const deleteMuralData = async () => {
    const resp = await axios.delete('/api/murals/' + mural.id)
    console.log(resp.data)
  }

  const updateMuralData = async () => {
    const resp = await axios.put('/api/murals/' + mural.id)
    console.log(resp.data)
  }

  return (
    <main className="mural-details">
      <img src={mural.imageURL} alt={mural.artistName} />
      <h1>{mural.artistName}</h1>
      <section>
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

        {/* <p className="muralIdNumberDis">Mural ID number: {mural.id}</p> */}

        <p className="updateMural">
          <p>Something is incorrect?</p>
          <button onClick={updateMuralData}>
            <Link to="/update">Update mural</Link>
          </button>
        </p>
        <p className="deleteMural">
          <p>Mural no longer there?</p>
          <button onClick={deleteMuralData}>
            <Link to="/">Delete mural</Link>
          </button>
        </p>
      </section>
    </main>
  )
}

export default MuralDetails
