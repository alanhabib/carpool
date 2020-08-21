import React, {useState, useEffect} from 'react';
import {clientsData} from "../data/clientData"
import CarsSelect from "./components/carsSelect";
import StatusCarsSelect from "./components/statusCarsSelect";
import useInterval from "./components/useInterval"
import {Pulse} from "./components/pulse";

function App() {
	const [clients, setClients] = useState(getLocalStorage("clients"));
	const [carByOwner, setCarByOwner] = useState("");
	const [statusCar, setStatusCar] = useState("");


	function setLocalStorage(key, value) {
		localStorage.setItem(key, JSON.stringify(value))
	}

	function getLocalStorage(key) {
		let value = localStorage.getItem(key);
		return JSON.parse(value)
	}

	useEffect(() => {
		if(!clients) {
			setClients(clientsData);
		}
	}, []);

	useEffect(() => {
		setLocalStorage("clients", clients);
		getLocalStorage("clients")
	}, [clients]);

	useInterval(async () => {
		const localStorage = await getLocalStorage("clients");
		localStorage.map(client => {
			return client.cars.map(car => {
				if(Math.random() > 0.5) {
					return car.timeStamp = Date();
				}
			})
		});
		await setLocalStorage("clients", localStorage);
		await setClients(localStorage)
	}, 60000);

	// useInterval(async () => {
	// 	const localStorage = await getLocalStorage("clients");
	// 	localStorage.map(client => {
	// 		return client.cars.map(car => {
	// 			car.status === "on" && setActive(true)
	// 		})
	// 	});
	// }, 4000);

	function valueHandler(event) {
		const {value} = event.target;
		setCarByOwner(value)
	}

	function statusOn() {
		setStatusCar(prevState => prevState !== "on" ? "on" : prevState)
	}

	function statusOff() {
		setStatusCar(prevState => prevState !== "off" ? "off" : prevState)
	}

	function lessThanMinute(date) {
		const MINUTE = 1000 * 60;
		const aMinuteAgo = Date.now().valueOf() - MINUTE;
		const prevDate = Date.parse(date).valueOf();
		if(prevDate > aMinuteAgo) {
			console.log("on");
			return "on"
		} else {
			console.log("off");
			return "off"
		}
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
				<StatusCarsSelect setStatusCar={setStatusCar} statusOn={statusOn} statusOff={statusOff}/>
			</div>
			{filteredClients.map(client => (
				<div style={{border: "1px solid blue", borderRadius: 6, padding: 12, margin: 12}}
					 key={client.id}>
					<h2>{client.name}</h2>
					<h4>{client.address}</h4>
					{client.cars.filter(car => car.status.match(statusCar)).map((newCar, index) => {
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
								<li>Status: {newCar.timeStamp}</li>
								{lessThanMinute(newCar.timeStamp) === "on" ? <Pulse/> : null}
							</ul>
						</div>
					})}
				</div>
			))}
		</div>
	);
}

export default App;
