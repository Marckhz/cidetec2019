import React from 'react';
import { BrowserRouter as ReactRouter, Route, Link, Switch } from "react-router-dom";


import Login from './components/login';
import Register from './components/register';
import Survey from './components/survey';
import Dashboard from './components/dashboard';
import GuestForm from './components/guestForm';
import RegisterProduct from './components/registerProduct';
import Splash from './components/splash';
import Process from './components/landingSystematized';
import Emphatize from './components/emphatize';
import Interview from './components/interview';
import Derivation from './components/derivation';
import Classification from './components/classification';
import FinalAttributes from './components/finalAttributes';
import Define from './components/define';


import { connect } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';


import history from './index.js'

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
						<Route exact path="/splash" component={Splash}/>
						<Route exact path="/" component={ Login }/>
			  			<Route exact path="/register" component = {Register}/>
			  			<Route exact path="/encuesta/:slug" component ={Survey} />
			  			<Route exact path="/dashboard" component ={Dashboard}/>
			  			<Route exact path="/registrar-producto/" component={RegisterProduct}/>
			  			<Route exact path="/process/" component={Process}/>
			  			<Route exact path="/emphatize/:slug" component={Emphatize}/>
			  			<Route exact path="/interview/:slug" component={Interview}/>
			  			<Route exact path="/derivation/:slug" component={Derivation}/>
			  			<Route exact path="/classification/:slug" component={Classification}/>
			  			<Route exact path="/final-attributes/:slug" component={FinalAttributes}/>
			  			<Route exact path="/define/" component={Define}/>
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