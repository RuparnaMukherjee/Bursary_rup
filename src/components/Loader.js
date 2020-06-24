import React from 'react';

const Loader = props => {
	return(
		<div className="component__loader">
			<div className="dot-container">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
		</div>
	)
}

export { Loader }