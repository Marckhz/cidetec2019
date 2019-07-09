import React from 'react';



import axios from 'axios';



import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import { green } from '@material-ui/core/colors';

//import TextField from '@material-ui/core/TextField';



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

		this.postRegister = this.postRegister.bind(this);



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

	postRegister(event){

		let myusername = this.state.username
		let mypwd = this.state.password
		let my_name = this.state.first_name
		let my_last_name = this.state.last_name
		let myemail = this.state.email

		axios.post(`http://127.0.0.1:8000/register/`,{
			username:myusername,
			password:mypwd,
			first_name:my_name,
			last_name:my_last_name,
			email:myemail
		})
		.then(res=>{
			console.log(res)
		})
		console.log(myusername)
		console.log(mypwd)
		console.log(my_name)
		console.log(my_last_name)
		console.log(myemail)
	}
	render(){
		return(

			<div className="container">
				<div className="row">
					<div className="col">
						<Card>
							<CardHeader title="Registrarse" />
							<CardContent>
								<div className="row Card-Input">
									<Input placeholder="username" 
									fullWidth={true}
									onChange={this.handleChangeUsername}
									/>
								</div>
								<div className="row Card-Input">
									<Input  onChange={this.handleChangePwd} type="password" placeholder="password"fullWidth={true}/>
								</div>
								<div className="row Card-Input">
									<Input  onChange={this.handleChangeName}  placeholder="nombre"fullWidth={true}/>
								</div>
								<div className="row Card-Input">
									<Input onChange={this.handleChangeLastName} placeholder="apellido" fullWidth={true}/>
								</div>
								<div className="row Card-Input">
									<Input onChange={this.handleChangeEmail} type="email"placeholder="email" fullWidth={true}/>
								</div>
								<div>
									<Button variant="contained" color="primary" onClick={this.postRegister}> Registrarse </Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>

			);
	}
}