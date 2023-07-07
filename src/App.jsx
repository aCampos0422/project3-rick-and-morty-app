import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNum'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

// https://rickandmortyapi.com/documentation/#get-a-single-location

// https://rickandmortyapi.com/api/location/3

function App() {
  
  const [location, setLocation] = useState()

  useEffect(()=>{
    const urlApi = `https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`
    axios
    .get(urlApi)
    .then(resp => setLocation(resp.data))
    .catch(error => console.error(error))
  }, [])


  return (
    <div>
      <h1>Rick and Morty Web Page</h1>
      <LocationInfo
      location={location}/>

      <div className='resident-container'>
        {
          location?.residents.map(url => (
            <ResidentCard
            key={url}
            url={url}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
