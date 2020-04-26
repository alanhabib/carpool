import React, {Component} from 'react';
import Header from "./Components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductList from "./Components/stations/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import NotFoundPage from "./Components/NotFoundPage";

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header/>
				<Switch>
					<Route exact path={"/"} component={ProductList}/>
					<Route path={"/details"} component={Details}/>
					<Route path={"/cart"} component={Cart}/>
					{/*<Route path={"/edit/:id"} component={ProductList}/>*/}
					{/*<Route path={"/store"} component={Store}/>*/}
					<Route component={NotFoundPage}/>
				</Switch>
			</BrowserRouter>
		);
	}
};
