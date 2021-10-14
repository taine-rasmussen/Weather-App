import React from 'react';

// GET request
import { getData } from '../api'

const Input = ({city, setCity, setAllData, allData}) => {

	// Gets data for city user entered then updates state with data
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
		<div className='input-container'>
			<div className='input-header-container'>
				<h1 className='input-header'>Weather <strong>Forcast</strong></h1>
			</div>
			<form onSubmit={(e) => {handleSubmit(e)}} className='input-form'>
				<input type="text" className='input-input' placeholder='Enter city here...' onChange={(e) => {handleChange(e)}}/>
				<button className='btn-input' onClick={getWeather}>Search</button>
			</form>
		</div>
	)
}

export default Input