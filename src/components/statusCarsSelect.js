import React from 'react';

function StatusCarsSelect({statusCar, onHandler, statusHandler, statusOff, setStatusCar}) {

	return (
		<div>
			<div onClick={() => {
				statusHandler(false);
				console.log("## statusCar", statusCar);
			}}>
				ON
			</div>
			<div onClick={() => {
				statusHandler(true);
				console.log("## statusCar", statusCar);
			}}>
				OFF
			</div>
		</div>
	);
}

export default StatusCarsSelect;
