import React from 'react';

const Display = ({allData}) => {

	const mtnsDay = 'imgs/mtns-day.jpeg'
	const mtnsNight = 'imgs/mtns-nigth.jpeg'


	return(
		<div>
			{allData.name ? 
				<div className="display-container">
					<div className="display-left-section">
						<img src={mtnsDay} className="left-bg-img"/>
						<h3 className='display-city display-title'>{allData.name},  {allData.sys.country}</h3>
					</div>
					<div className="display-right-section"> 
						<div className="display-right-header">
							<h3 className='display-title'>Current conditions: {allData.weather[0].description}</h3>
						</div>
						<div className="display-right-content">
							<ul>
								<li>Temp: {allData.main.temp}</li>
								<li>Humidity: {allData.main.humidity}</li>
								<li>Wind: {allData.wind.speed}</li>
							</ul>
						</div>

					</div>
				</div> : null}
		</div>

	)
}

export default Display;