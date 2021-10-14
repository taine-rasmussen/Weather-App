import React, { useState } from 'react'

// Components
import Input from './Input'
import Display from './Display'


function App () {

  const [city, setCity] = useState('') 
  const [allData, setAllData] = useState('allData')

  return (
    <>
      <div className='app'>
        <div className='input-container'>
          <Input city={city} setCity={setCity} setAllData={setAllData} allData={allData}/>  
        </div>
        <div className='display-container'>
          <Display allData={allData}/>
        </div>
      </div>
    </>
  )
}

export default App
