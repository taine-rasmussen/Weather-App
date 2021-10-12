import React from 'react'


function App () {

  const API = {
    key: '687bdd4bcdfaae0e53254b01661b9ec2',
    base: `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}` // example GET request
  }

  return (
    <>
      <div className='app'>
        <h1>Weather App working</h1>
      </div>
    </>
  )
}

export default App
