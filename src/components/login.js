import React from 'react';

import axios from 'axios';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


import { BrowserRouter as ReactRouter, Route, Link } from "react-router-dom";



export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			user:'',
			password:'',
			token:''
		}

  	  this.handleChange = this.handleChange.bind(this);
  	  this.handleSubmit = this.handleSubmit.bind(this);
  	  this.handlePasswordChange = this.handlePasswordChange.bind(this);
  	  this.loginPost = this.loginPost.bind(this);
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
		if(this.state.user==='' || this.state.password ===''){
			alert('Algun campo es requerdo')
		}	
	}

	loginPost(event){
		let username = this.state.user
		let passwd = this.state.password
		if(username ===''|| passwd ===''){
			alert("error")
		}else{
			axios.post(`http://127.0.0.1:8000/api/token/`,{

				username:username,
				password:passwd
			})
			.then(res=>{
				console.log(res)
				localStorage.setItem('jwt', res.data['access'])
			})
		}
	}
	render(){
		return(

				<div className="container">
					<div className="row">
						<div className="col">
							<Card>
								<CardHeader title="Login"/>
								<CardContent>
									<Input className="Input-Username" 
										placeholder="username"
										fullWidth={true}
										required={true}
										onChange= {this.handleChange}
										value = {this.state.user}
									 />
									 <Input className="Input-Password"
									 	placeholder="password"
									 	type="password"
									 	fullWidth={true}
									 	required={true}
									 	onChange ={this.handlePasswordChange}
									 	value= {this.state.password}
									 />
									<Link to="/create">
										<Button variant="contained" 
											color="primary" 
											style={{"margin":"10px"}} 
											onClick={this.loginPost}
											 >Iniciar Sesion
										</Button>
									</Link>							
								</CardContent>
							</Card>
						</div>
					</div>
				</div>



			)
	}

}