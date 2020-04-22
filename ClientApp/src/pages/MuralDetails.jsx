import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PageLoader from '../components/PageLoader'
import Mural from '../components/Mural'

// this pages job is to collect the mural data/info

const MuralDetails = props => {
  console.log(props)
  const muralId = props.match.params.muralId

  const [mural, setMural] = useState()

  const getMuralData = async () => {
    const resp = await axios.get('/api/murals/' + muralId)
    console.log(resp.data)
    setMural(resp.data)
  }

  // useEffect is like a side effect
  // hey when ever this happens also do this
  useEffect(() => {
    // make api call on page load
    getMuralData()
  }, [])

  // truthy falsey statement, not bool
  if (mural) {
    return <Mural mural={mural} />
  } else {
    return <PageLoader />
  }
}
export default MuralDetails
