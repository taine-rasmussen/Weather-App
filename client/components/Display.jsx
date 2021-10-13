import React from 'react';

const Display = ({city, setCity, setAllData, allData}) => {

	return(
		<div className="display-container">
			<div className="display-left-section">
				<h2>{allData.name}</h2>
			</div>
			<div className="display-right-section"> 
				<h3>{allData.timezone}</h3>
			</div>
		</div>
	)
}

export default Display;