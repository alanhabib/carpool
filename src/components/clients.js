import React from 'react';
import {lessThanMinute} from "../lib/timeHandler";
import Pulse from "../lib/pulse";

function Clients({statusCar, filteredClients}) {
	return (
		<div>
			{filteredClients
				.map(client => (
					<div style={{
						border: "1px solid #0A84FF",
						borderRadius: 6,
						padding: 12,
						margin: 12
					}}
						 key={client.id}>
						<h2>{client.name}</h2>
						<h4>{client.address}</h4>
						{client.cars
							.filter(car => lessThanMinute(car.timeStamp) !== (statusCar))
							.map((newCar, index) => {
								return <div key={index}>
									<h4 style={{margin: 0}}>Vehicle:</h4>
									<ul style={{
										margin: "4px 0",
										border: "1px dashed #30D158",
										padding: 12,
										listStyleType: "none"
									}}>
										<li>Vehicle ID: {newCar.vehicleId}</li>
										<li>Reg Number: {newCar.regNumber}</li>
										<li>Timestamp: {newCar.timeStamp}</li>
										<li>Status: {lessThanMinute(newCar.timeStamp) ? "On" : "Off"}</li>
										{lessThanMinute(newCar.timeStamp) ? <Pulse/> : null}
									</ul>
								</div>
							})}
					</div>
				))}
		</div>
	);
}

export default Clients;
