import React from "react";
import Map from './components/Map'
import { useState, useEffect} from 'react'
import Header from './components/Header'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)

    }
    fetchEvents()
    console.log(eventData);

  }, [])
  return (
    <div>
      <Header/>
      { !loading ? <Map eventData={eventData} /> : <h1>PLEASE WAIT FETCHING DATA</h1>}
    </div>
  );
}

export default App;
