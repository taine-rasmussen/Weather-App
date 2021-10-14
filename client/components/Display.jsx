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
						<h2>{allData.weather[0].description}</h2>
					</div>
					<div className="display-right-section"> 
						<h3>{allData.name}, {allData.sys.country}</h3>
					</div>
				</div> : null}
		</div>

	)
}

export default Display;