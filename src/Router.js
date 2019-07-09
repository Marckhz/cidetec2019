import React from 'react';
import { BrowserRouter as ReactRouter, Route, Link } from "react-router-dom";


import Formular from './components/formular';
import Login from './components/login';
import Register from './components/register';

import App from './App';


export default class Router extends React.Component{

	render(){
		return(
			<ReactRouter>
				<App>
					<Route exact path="/" component={Login}/>
	  				<Route exact path="/create" component={Formular}/>
	  				<Route exact path="/register" component = {Register}/>
				</App>
			</ReactRouter>

			);
	}
}