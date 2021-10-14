import React from 'react';

const Display = ({allData}) => {

	return(
		<div>
			{allData.name ? 
				<div className="display-container">
					<div className="display-left-section">
						<h2>{}</h2>
					</div>
					<div className="display-right-section"> 
						<h3>{allData.name}, {allData.sys.country}</h3>
					</div>
				</div> : null}
		</div>

	)
}

export default Display;