import React from 'react';

function StatusCarsSelect({statusHandler}) {

	return (
		<div>
			<div onClick={() => {
				statusHandler(false);
			}}>
				{"ON"}
			</div>
			<div onClick={() => {
				statusHandler(true);
			}}>
				{"OFF"}
			</div>
		</div>
	);
}

export default StatusCarsSelect;
