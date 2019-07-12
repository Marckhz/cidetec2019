import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';

import TextField from '@material-ui/core/TextField';



import { connect } from 'react-redux';

import * as actions from '../actions/userAction';

import  { push } from 'react-router-redux';


import { BrowserRouter as ReactRouter, Route, Link } from "react-router-dom";

import { login } from '../requests/auth';


import AppBar from '@material-ui/core/AppBar';


export  class Login extends React.Component {


	constructor(props){
		super(props);
		this.state = {
			user:'',
			password:'',
		}

	//console.log(props.user)
  	  this.handleChange = this.handleChange.bind(this);
  	  this.handleSubmit = this.handleSubmit.bind(this);
  	  this.handlePasswordChange = this.handlePasswordChange.bind(this);

  	  this.requestAuth = this.requestAuth.bind(this);
	}


	handleChange(event){
		this.setState({
			user: event.target.value,
		})
	}
	handlePasswordChange(event){
		this.setState({
			password: event.target.value,
		})
	}

	handleSubmit(event){
		if(this.state.user ==='' || this.state.password ===''){
			alert('Algun campo es requerdo')
		}	
	}

	requestAuth(){
		const credentials ={
			username: this.state.user,
			password: this.state.password
		}
		//console.log(credentials)

		login(credentials).then(data =>{
			console.log(data.jwt)
			this.props.dispatch(actions.login(data.jwt));
			this.props.dispatch(actions.loadUser(data.user))
			this.props.dispatch(push('/'))
		})
	}

	render(){
		return(
			<Container>
				<div className="container">
					<div className="row">
						<div className="col">
							<Card>
								<CardHeader title="Login"/>
								<CardContent>
									<Input  placeholder="usuario"
									fullWidth={true}
									onChange={this.handleChange}
									
									/>
									 <Input className="Input-Password"
									 	placeholder="password"
									 	type="password"
									 	fullWidth={true}
									 	required={true}
									 	onChange ={this.handlePasswordChange}
									 	
									 />
									 <Link to="/create">
										<Button variant="contained" 
											color="primary" 
											style={{"margin":"10px"}} 
											onClick={this.requestAuth}
											 >Iniciar Sesion
										</Button>
									</Link>	
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</Container>
			)
	}
}

function mapStateToProps(state, ownProps){
	return {
		user: state.user
	}
}
export default connect(mapStateToProps)(Login);