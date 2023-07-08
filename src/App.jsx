import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNum'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'

// https://rickandmortyapi.com/documentation/#get-a-single-location

// https://rickandmortyapi.com/api/location/3

function App() {
  
  const [location, setLocation] = useState()
  const [idLocation, setIdLocation]= useState(getRandomNumber(126))
  const[hasErro, setHasError]= useState(false)
  const [isLoading, setIsLoading]= useState(true)

  useEffect(()=>{
    const urlApi = `https://rickandmortyapi.com/api/location/${idLocation}`
    setIsLoading(true)
    axios
    .get(urlApi)
    .then(resp => {
      setLocation(resp.data)
      setHasError(false)
    })
    .catch(error => {
      console.error(error)
      setHasError(true)
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }, [idLocation])


  return (
    <div>
      <h1>Rick and Morty Web Page</h1>

      <FormSearch
      setIdLocation={setIdLocation}/> 

      {
        isLoading
        ?(<h1>Loading</h1>)
        :(
          hasErro
        ?(<h1>Hey, You must provide and id from 1 to 126😢</h1>)
        :(
          <>
              <LocationInfo
              location={location}
              />

              <div className='resident-container'>
                {
                  location?.residents.map(url => (
                    <ResidentCard
                    key={url}
                    url={url}/>
                  ))
                }
              </div>
          </>
        )

        )

      }
    </div>
  )
}

export default App
