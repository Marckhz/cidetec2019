import React from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import { green } from '@material-ui/core/colors';

import { Link } from "react-router-dom";

import Net from '../images/net.mp4';

import TextField from '@material-ui/core/TextField';


//import TextField from '@material-ui/core/TextField';

import { register } from '../requests/auth'; 

export default class Register extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:'',
			first_name:'',
			last_name:'',
			email:''
		}

		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleChangePwd = this.handleChangePwd.bind(this);
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeLastName = this.handleChangeLastName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);

		this.requestSignUp = this.requestSignUp.bind(this);
	}

	handleChangeUsername(event){
		this.setState({
			username: event.target.value,
		})
	}
	
	handleChangePwd(event){
		this.setState({
			password: event.target.value
		})
	}
	handleChangeName(event){
		this.setState({
			first_name:event.target.value
		})
	}
	handleChangeLastName(event){
		this.setState({
			last_name:event.target.value
		})
	}
	handleChangeEmail(event){
		this.setState({
			email:event.target.value
		})
	}

	requestSignUp(){
		const  data = {
			username:this.state.username,
			password:this.state.password,
			email:this.state.email,
			first_name:this.state.first_name,
			last_name:this.state.last_name
		}

		register(data).then()

	}

	render(){
		return(
			<div className="container">
				<video  id="myVideo" loop autoPlay>
					<source src={Net} type="video/mp4"/>
				</video>
				<div className="row justify-content-center" style={{"margin":"auto", "marginTop":"225px"}}>
					<div className="col-12 col-md-6" style={{"margin":"auto"}}>
						<Card raised={true} style={{"margin":"auto"}}>
							<CardHeader title="Register" disableTypography={true} style={{"textAlign":"center", "fontSize":"48px", "fontFamily":"Righteous"}}/>
								<CardContent >
								<div className="row" style={{"margin":"1em"}}>
									<div className="col-12 col-md-12">
										<TextField 
										fullWidth={true}
										variant="outlined"
										placeholder="username" 
										label="username"/>
									</div>
								</div>
								<div className="row" style={{"margin":"1em"}}>
									<div className="col-12 col-md-12">
										<TextField fullWidth={true}
										variant="outlined"
										type="password"
										placeholder="password"
										label="password"/>
									</div>
								</div>
								<div className="row" style={{"margin":"1em"}}>
									<div className="col-12 col-md-12">
										<TextField
										fullWidth={true}
										type="email"
										variant="outlined"
										placeholder="email"
										label="email"/>
									</div>
								</div>
								<div  className="row" style={{"margin":"1em"}}>
									<div className="col-12 col-md-12">
										<TextField 
										fullWidth={true}
										variant="outlined"
										placeholder="First Name"
										label="First Name"/>
									</div>
								</div>
								<div className="row" style={{"margin":"1em"}}>
									<div className="col-12 col-md-12">
										<TextField 
										fullWidth={true}
										variant="outlined"
										placeholder="Last Name"
										label="Last Name"/>
									</div>
								</div>
								<div className="row" style={{"margin":"1em"}}>
									<div className="col-12 col-md-12">
										<Button 
										size="large"
										variant="contained" 
										fullWidth={true} style={{"fontSize":"24px", "fontFamily":"Righteous", "color":"white","backgroundColor":"black"}}>Register</Button>
									</div>
								</div>
								<div className="row justify-content-center" style={{"margin":"1em", "fontSize":"12px"}}>
									<div className="col-1 col-md-6">
										<p> Already have an account? <Link to="/">Sign</Link> </p>
									</div>
								</div>
								</CardContent>
						</Card>
					</div>
				</div>
			</div>

			);
	}
}