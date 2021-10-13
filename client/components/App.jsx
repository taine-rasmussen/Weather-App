import React, { useState, useEffect } from 'react'

// Components
import Input from './Input'


function App () {

  const [city, setCity] = useState('') 
  const [allData, setAllData] = useState('allData')


  return (
    <>
      <div className='app'>
        <Input city={city} setCity={setCity} setAllData={setAllData} allData={allData}/>
      </div>
    </>
  )
}

export default App
