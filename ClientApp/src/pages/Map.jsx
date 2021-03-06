import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import axios from 'axios'
import { usePosition } from 'use-position'
import { Link } from 'react-router-dom'

// hard coded locations
// const data = [
//   { latitude: 27.7733, longitude: -82.6389, text: 'A' },
//   { latitude: 27.7766, longitude: -82.7365, text: 'B' },
//   { latitude: 27.8777, longitude: -82.7582, text: 'C' },
// ]

const Map = () => {
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(
    false,
    { enableHighAccuracy: true }
  )
  // console.log(latitude, longitude, timestamp, accuracy, error)

  const [viewport, setViewport] = useState({
    width: 1440,
    height: 625,
    latitude: latitude,
    longitude: longitude,
    zoom: 12,
  })

  useEffect(() => {
    setViewport(prev => {
      return {
        ...prev,
        latitude: latitude,
        longitude: longitude,
      }
    })
  }, [latitude, longitude])

  const [showPopup, setShowPopup] = useState(false)
  const [selectedMural, setSelectedMural] = useState({})
  const [murals, setMurals] = useState([])
  const [locationAddress, setLocationAddress] = useState('')
  const loadAllLocations = async () => {
    const resp = await axios.get('/api/murals')
    setMurals(resp.data)
  }

  useEffect(() => {
    loadAllLocations()
  }, [])

  const markerClicked = place => {
    console.log('marker clicked', place)
    setSelectedMural(place)
    setShowPopup(true)
  }

  const addNewLocation = () => {
    const resp = axios.post('/api/location', {
      description: 'from UI',
      fullAddress: locationAddress,
    })
    if (resp.status === 201) {
      setMurals(prevMarkers => {
        return [resp.data, ...prevMarkers]
      })
    }
  }
  return (
    <div>
      <section>
        {/* add a mural input box at top of map */}
        {/* maybe add a Link to add a mural page? */}
        {/* <input
          type="text"
          placeholder="address, city, state, zip"
          value={locationAddress}
          onChange={e => setLocationAddress(e.target.value)}
        />
        <button onClick={addNewLocation}>Add New Location</button> */}
      </section>

      <section className="map-container">
        <ReactMapGL
          {...viewport}
          onViewportChange={setViewport}
          mapboxApiAccessToken={
            'pk.eyJ1IjoiY2hlemJpYW4iLCJhIjoiY2s5MzM5Z2VjMDFlOTNrc2p1N2M1cWZjeSJ9.OhBsG3p6qB9AfvtMEGhLOg'
          }
        >
          {showPopup && (
            <Popup
              latitude={selectedMural.latitude}
              longitude={selectedMural.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setShowPopup(false)}
              anchor="top"
              offsetTop={15}
            >
              <div className="popup-window">
                {selectedMural.artistName}
                <p>
                  {/* maybe it needs to be a redirect.... */}
                  {/* how do i call to a specific mural.... by id? */}
                  <Link
                    to={`/murals/${selectedMural.id}`}
                    className="map-to-mural-link"
                  >
                    more info
                  </Link>
                </p>
              </div>
              {/* maybe change this to selected mural image URL? */}
              {/* <div className="popup-window">
                😊{selectedMural.muralDescription}
              </div> */}
            </Popup>
          )}
          {murals.map(place => {
            return (
              <Marker
                latitude={place.latitude}
                longitude={place.longitude}
                key={place.id}
              >
                <div onClick={() => markerClicked(place)}>📍</div>
              </Marker>
            )
          })}
          {/* <Marker
            latitude={27.7743}
            longitude={-82.6389}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <div>📍central</div>
          </Marker>
          {data.map(place => {
            return (
              <Marker
                latitude={place.latitude}
                longitude={place.longitude}
                key={place.text}
              >
                <div onClick={() => markerClicked(place)}>{place.text}</div>
              </Marker>
            )
          })} */}
        </ReactMapGL>
        <Link to="./search" className="mapToSearchPage">
          <p>Search Murals</p>
        </Link>
      </section>
    </div>
  )
}

export default Map
