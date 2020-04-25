import React from 'react'
import axios from 'axios'

const Update = props => {
  const { mural } = props
  const updateMuralData = async () => {
    const resp = await axios.put('/api/murals/' + mural.id)
    console.log(resp.data)
  }

  return <div>helllloooooo world</div>
}

export default Update
