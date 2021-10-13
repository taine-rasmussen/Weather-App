import React, { useState } from 'react'

// GET request
import { getData } from '../api'


function App () {

  const [city, setCity] = useState('wellington') 
  const [allData, setAllData] = useState(null)


    const getWeather = () => {
      getData(city)
      .then(res => {
        setAllData(res)
        console.log(allData)
      })
      .catch((err) => {
        console.error(err.message)
      })
    }


  return (
    <>
      <div className='app'>
        <button onClick={getWeather}>Get weather</button>
      </div>
    </>
  )
}

export default App
