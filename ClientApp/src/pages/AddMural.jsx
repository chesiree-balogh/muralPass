import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

const AddMural = () => {
  const [mural, setMural] = useState({})
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
    newMuralInformation: {},
  })

  const updateMuralData = e => {
    const key = e.target.name
    const value = e.target.value
    setMural(prevMural => {
      prevMural[key] = value
      return prevMural
    })
  }

  const addMuralToApi = async () => {
    console.log('adding', mural)
    const resp = await axios.post('/api/murals', mural)
    if (resp.status === 201) {
      // do something
      setWasSuccessfullyCreated({
        shouldRedirect: true,
        newMuralInformation: resp.data,
      })
    } else {
      // do something
    }
  }

  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: '/murals/' + wasSuccessfullyCreated.newMuralInformation.id,
          state: { mural: wasSuccessfullyCreated.newMuralInformation },
        }}
      />
    )
  } else {
    return (
      <main className="addMuralPage">
        <div>
          <section className="whatIsMuralDescription">
            <label htmlFor="">
              <h5>Mural Description</h5>
            </label>
          </section>
          <input
            className="whatIsMuralDescriptionInput"
            type="text"
            name="muralDescription"
            onChange={updateMuralData}
          />
          <section className="whatIsArtistName">
            <label htmlFor="">
              <h5>Artist Name</h5>
            </label>
          </section>
          <input
            className="whatIsArtistNameInput"
            type="text"
            name="artistName"
            onChange={updateMuralData}
          />
          <section className="whatIsFullAddress">
            <label htmlFor="">
              <h5>Full Address</h5>
            </label>
          </section>
          <input
            className="whatIsFullAddressInput"
            type="text"
            name="fullAddress"
            onChange={updateMuralData}
          />
          <section className="whatIsImgURL">
            <label htmlFor="">
              <h5>Img URL</h5>
            </label>
          </section>
          <input
            className="whatIsImgURLInput"
            type="text"
            name="imageURL"
            onChange={updateMuralData}
          />
          {/* <section className="addContainer">
            <label htmlFor="">Longitude</label>
            <input type="text" name="longitude" onChange={updateMuralData} />
          </section>
          <section className="addContainer">
            <label htmlFor="">Latitude</label>
            <input type="text" name="latitude" onChange={updateMuralData} />
          </section> */}
          <section className="logMuralButton">
            <button onClick={addMuralToApi}>
              <h4>Log a new mural</h4>
            </button>
          </section>

          <div className="discoverCurrent">
            <h3>Want to discover currently logged murals?</h3>
          </div>
          <Link to="/search" className="searchMurals">
            Search view
          </Link>
          <p> </p>
          <Link to="/map" className="mapOfMurals">
            Map view
          </Link>
        </div>
      </main>
    )
  }
}

export default AddMural
