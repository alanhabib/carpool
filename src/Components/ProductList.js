import React, {Component} from 'react';
import axios from "axios";

class ProductList extends Component {

	componentDidMount() {
		this.getDataHandler();
	}

	getDataHandler =  () => {
		const url = "https://api.sl.se/api2/realtimedeparturesV4.json?key=6f599d82c2e744b2a5801b0aedf6a96e&siteid=9192&timewindow=30";
		axios.get(url)
			.then((res) => {
				console.log("#### api response 1", res);
				res.data.ResponseData.Metros.map(metros => {
					console.log("#### api response 2", metros);
				})
			}, (error) => {
				console.log("####, error", error);
			})
		// const response =  fetch(url, {
		// 	mode: "no-cors",
		// 	cache: "no-cache",
		// 	headers: {
		// 		"Content-Type": "application/json"
		// 	}
		// });
		// return response.json();
	};

	render() {
		return (
			<div>
				<h1>hello from Productlist</h1>
			</div>
		);
	}
}

export default ProductList;
