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
						<h3 className='display-city'>{allData.name},  {allData.sys.country}</h3>
					</div>
					<div className="display-right-section"> 
						<div className="display-right-header">
							<h2>Current conditions: <h3>{allData.weather[0].description}</h3> </h2>
						</div>
						<div className="display-right-content">

						</div>

					</div>
				</div> : null}
		</div>

	)
}

export default Display;