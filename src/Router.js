import React from 'react';
import { BrowserRouter as ReactRouter, Route, Link, Switch } from "react-router-dom";


import Formular from './components/formular';
import Login from './components/login';
import Register from './components/register';
import Survey from './components/survey';
import Dashboard from './components/dashboard';


import { connect } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';


import histro from './index.js'

import App from './App';


const userSignedIn = false;

class Router extends React.Component{


	signInRoutes(){
		if(this.props.user.jwt){
			return(
					<Route path="/dashboard"> </Route>
				);
		}
	}

	home(){
		if(this.props.user.jwt) return Login;
		return Login;
	}

	render(){
		return(	
			<ReactRouter history = {this.props.history}>
				<Switch>
					<App>
						<Route exact path="/" component={ Login }/>
			  			<Route exact path="/create" component={Formular}/>
			  			<Route exact path="/register" component = {Register}/>
			  			<Route exact path="/survey" component ={Survey} />
			  			<Route exact path="/dashboard" component ={Dashboard}/>
			  			{this.signInRoutes()}
					</App>
				</Switch>

			</ReactRouter>

			);
	}
}

function mapStateToProps(state, ownProps){
	return{
		user : state.user
	}
}

export default connect(mapStateToProps)(Router);