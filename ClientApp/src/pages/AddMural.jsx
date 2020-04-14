import React from 'react'

const AddMural = () => {
  return (
    <>
      <main>
        <section>
          <label htmlFor="">Mural Description</label>
          <input type="text" />
        </section>
        <section>
          <label htmlFor="">Artist Name</label>
          <input type="text" />
        </section>
        <section>
          <label htmlFor="">Address</label>
          <input type="text" />
        </section>
        <section>
          <label htmlFor="">City</label>
          <input type="text" />
        </section>
        <section>
          <label htmlFor="">State</label>
          <input type="text" />
        </section>
        <button>Report a new mural</button>
      </main>
    </>
  )
}

export default AddMural
