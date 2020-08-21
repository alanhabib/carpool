import React from 'react';

function StatusCarsSelect({statusOn, statusOff, setStatusCar}) {
	return (
		<div>
			<div onClick={() => {
				statusOn()
			}}>
				ON
			</div>
			<div onClick={() => {
				statusOff()
			}}>
				OFF
			</div>
			<div onClick={() => setStatusCar("")}>Restart</div>
		</div>
	);
}

export default StatusCarsSelect;
