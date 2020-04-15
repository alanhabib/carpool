import React, {Component} from 'react';
import axios from "axios";

class ProductList extends Component {

	state = {
		metros: []
	};

	componentDidMount() {
		this.getDataHandler();
	}

	getDataHandler = () => {
		const url = "https://api.sl.se/api2/realtimedeparturesV4.json?key=6f599d82c2e744b2a5801b0aedf6a96e&siteid=9192&timewindow=30";
		axios.get(url)
			.then((res) => {
				return res.data.ResponseData.Metros.map(metros => {
					this.setState({
						metros: [...this.state.metros, metros]
					}, () => {
						console.log("#### metros 1", this.state.metros);
					});
				})
			}, (error) => {
				console.log("####, error", error);
			})
	};

	destinationStationHandler = () => {
		return this.state.metros.slice(0,9).map((station, index) => {
			console.log("#### metros 2", station);
			return (
				<div key={index}>
					<ul>
						<li>
							{station.Destination}
						</li>
						<li>
							Avgång: {station.DisplayTime}
						</li>
						<li>
							Anländer: {station.TimeTabledDateTime}
						</li>
					</ul>
				</div>
			)
		});
	};

	render() {
		return (
			this.destinationStationHandler()
		);
	}
}

export default ProductList;
