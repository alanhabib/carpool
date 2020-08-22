import React, {useState, useEffect} from 'react';
import {clientsData} from "../data/clientData"
import CarsSelect from "./components/carsSelect";
import StatusCarsSelect from "./components/statusCarsSelect";
import useInterval from "./components/useInterval"
import {Pulse} from "./components/pulse";

function App() {
	const initialState = getLocalStorage("clients");
	const [clients, setClients] = useState(initialState);
	const [carByOwner, setCarByOwner] = useState("");
	const [statusCar, setStatusCar] = useState("");


	useEffect(() => {
		if(!clients) {
			setClients(clientsData)
		}
	}, []);

	useEffect(() => {
		setLocalStorage("clients", clients);
		getLocalStorage("clients");
	}, [clients]);

	function setLocalStorage(key, value) {
		window.localStorage.setItem(key, JSON.stringify(value))
	}

	function getLocalStorage(key) {
		let value = window.localStorage.getItem(key);
		return JSON.parse(value)
	}

	useInterval(() => {
		const localStorage = getLocalStorage("clients");
		localStorage.map(client => {
			return client.cars.map(car => {
				if(Math.random() > 0.5) {
					return car.timeStamp = Date();
				}
			})
		});
		setLocalStorage("clients", localStorage);
		setClients(localStorage);
		console.log("## statuscar", statusCar);
	}, 60000);

	function valueHandler(event) {
		const {value} = event.target;
		setCarByOwner(value)
	}

	function statusHandler(show) {
		setStatusCar(prevStat => prevStat !== show ? show : "")
	}

	function lessThanMinute(date) {
		const MINUTE = 1000 * 60;
		const aMinuteAgo = Date.now().valueOf() - MINUTE;
		const prevDate = Date.parse(date).valueOf();
		return prevDate > aMinuteAgo
	}

	const filteredClients = clients.filter(client => client.name.match(carByOwner));
	return (
		<div>
			<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
				<CarsSelect
					clients={clients}
					carByOwner={carByOwner}
					setCarByOwner={setCarByOwner}
					valueHandler={valueHandler}
				/>
				<StatusCarsSelect
					lessThanMinute={lessThanMinute}
					setStatusCar={setStatusCar}
					statusHandler={statusHandler}
					statusCar={statusCar}
				/>
			</div>
			{filteredClients
				.map(client => (
					<div style={{border: "1px solid blue", borderRadius: 6, padding: 12, margin: 12}}
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
										border: "1px dashed green",
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

export default App;
