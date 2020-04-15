import React, { useState } from 'react'
import axios from 'axios'

const AddMural = () => {
  const [mural, setMural] = useState({})

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
    } else {
      // do something
    }
  }

  return (
    <>
      <main>
        <section className="addContainer">
          <label htmlFor="">Mural Description</label>
          <input type="text" name="description" onChange={updateMuralData} />
        </section>
        <section className="addContainer">
          <label htmlFor="">Artist Name</label>
          <input type="text" name="artistName" onChange={updateMuralData} />
        </section>
        <section className="addContainer">
          <label htmlFor="">Longitude</label>
          <input type="text" name="longitude" onChange={updateMuralData} />
        </section>
        <section className="addContainer">
          <label htmlFor="">Latitude</label>
          <input type="text" name="latitude" onChange={updateMuralData} />
        </section>
        <button onClick={addMuralToApi}>Report a new mural</button>
      </main>
    </>
  )
}

export default AddMural
