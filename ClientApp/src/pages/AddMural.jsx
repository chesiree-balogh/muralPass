import React from 'react'

const AddMural = () => {
  return (
    <>
      <main>
        <section className="addContainer">
          <label htmlFor="">Mural Description</label>
          <input type="text" />
        </section>
        <section className="addContainer">
          <label htmlFor="">Artist Name</label>
          <input type="text" />
        </section>
        <section className="addContainer">
          <label htmlFor="">Longitude</label>
          <input type="text" />
        </section>
        <section className="addContainer">
          <label htmlFor="">Latitude</label>
          <input type="text" />
        </section>
        <button>Report a new mural</button>
      </main>
    </>
  )
}

export default AddMural
