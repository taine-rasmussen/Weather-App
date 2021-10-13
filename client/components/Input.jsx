import React, { useEffect } from 'react';

// GET request
import { getData } from '../api'

const Input = ({city, setCity, setAllData, allData}) => {

	const getWeather = () => {
	  getData(city)
	  .then(res => {
		setAllData(res)
		setCity('')
		console.log(allData)
	  })
	  .catch((err) => {
		console.error(err.message)
	  })
	}

	// useEffect(() => {
	//   getWeather()
	// }, []);

	 // Updates input state with text entered into search box
    const handleChange = (e) => {
      setCity(e.target.value)
    }
    // Handles form submit
    const handleSubmit = (e) => {
      e.preventDefault()
      e.target.reset()
    }


	return(

	<div className='search-container'>
        <div className='search-header-container'>
          <h1 className='search-header'>Weather Forcast</h1>
        </div>
          <form onSubmit={(e) => {handleSubmit(e)}} className='search-form'>
            <input type="text" className='search' placeholder='Enter city here...' onChange={(e) => {handleChange(e)}}/>
            <button className='btn-search' onClick={getWeather}>Search</button>
          </form>
	</div>

	)
}

export default Input