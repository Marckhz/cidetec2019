import React from 'react';

import axios from 'axios';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';



/*
Realizar una query donde el producto
y sus atributos correspondan al usuario que lo creo.
Esto debe arrojar solo lo correspondiente y generar un nuevo link
para compartir y se pueda contestar por multiples usuarios.

*/


export default class Survey extends React.Component{

	constructor(props){
		super(props);

		this.postMe = this.postMe.bind(this);
	}

	getMe(event){
		axios.get(``)
	}

	postMe(event){
		axios.post(`http://127.0.0.1:8000/create/`,{
			created_by: "marck",
	        product_id: "Bocina",
	        attribute_id: "negra",
	        choice: "5"
		})
		.then(res=>{
			console.log(res)
		})
	}


	render(){
		return(

			<div>
				<h1>HOla mundo </h1>
				<Button onClick = {this.postMe}>puchar </Button>
			</div>
			);
	}
}