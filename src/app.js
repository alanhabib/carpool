import React, {useState, useEffect} from 'react';
import {clientsData} from "../data/clientData"
import CarsSelect from "./components/carsSelect";
import StatusCarsSelect from "./components/statusCarsSelect";
import useInterval from "./lib/useInterval"
import {setLocalStorage, getLocalStorage} from "./lib/dataStorage";
import Clients from "./components/clients";

function App() {
	const initialState = getLocalStorage("clients");
	const [clients, setClients] = useState(initialState);
	const [carByOwner, setCarByOwner] = useState("");
	const [statusCar, setStatusCar] = useState("");


	useEffect(() => {
		let data = getLocalStorage("clients");
		if(!data) {
			data = setLocalStorage("clients", clientsData);
			setClients(data);
		}
	}, []);

	useEffect(() => {
		setLocalStorage("clients", clients);
		getLocalStorage("clients");
	}, [clients]);


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
	}, 60000);

	function valueHandler(event) {
		const {value} = event.target;
		setCarByOwner(value)
	}

	function statusHandler(show) {
		setStatusCar(prevStat => prevStat !== show ? show : "")
	}

	const filteredClients = clients.filter(client => client.name.match(carByOwner));
	return (
		<div>
			<div style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "flex-start",
				alignItems: "center"
			}}
			>
				<CarsSelect
					clients={clients}
					setCarByOwner={setCarByOwner}
					valueHandler={valueHandler}
				/>
				<StatusCarsSelect
					statusHandler={statusHandler}
				/>
			</div>
			<Clients
				filteredClients={filteredClients}
				statusCar={statusCar}
			/>
		</div>
	);
}

export default App;
