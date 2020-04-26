import React, {Component} from 'react';
import axios from "axios";
import "./stations.scss";
import classNames from "classnames";

const array = [
	"banana", "orange", "apple", "pear", "melon", "pineapple", "mango"
];

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.selectCard = this.selectCard.bind(this);
		this.card = [];
	}

	state = {
		metros: [],
		animate: null,
		fadeIn: false
	};

	componentDidMount() {
		// this.getDataHandler();
		this.setState({
			fadeIn: true
		});
	}

	selectCard = (index) => {
		this.setState({
			animate: index,
		})
	};

	// getDataHandler = () => {
	// 	const url = "https://api.sl.se/api2/realtimedeparturesV4.json?key=6f599d82c2e744b2a5801b0aedf6a96e&siteid=9192&timewindow=30";
	// 	axios.get(url)
	// 		.then((res) => {
	// 			return res.data.ResponseData.Metros.map(metros => {
	// 				this.setState({
	// 					metros: [...this.state.metros, metros]
	// 				});
	// 			})
	// 		}, (error) => {
	// 			console.log("####, error", error);
	// 		})
	// };

	destinationStationHandler = () => {
		const {animate} = this.state;
		return array.map((fruit, index) => {
			return (
				<div
					key={index}
					className={"cardContainer " + (this.state.fadeIn ? "fadeIn" : "")}>
					<div className={"box " + (animate === index ? "open" : "closed")}
					>
						<ul>
							<li>
								{fruit}
							</li>
						</ul>
					</div>
					<div
						onClick={() => {
							this.selectCard(index);
						}}
					>
						{animate === index ? "Close" : "Open"}
					</div>
				</div>
			)
		});
	};

	render() {
		return (
			<div>
				{this.destinationStationHandler()}
			</div>
		);
	}
}

export default ProductList;
