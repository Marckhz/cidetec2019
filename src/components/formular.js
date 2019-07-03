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


export default class Formular extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			product:'',
			value:'',
			item:[]
		}
  		this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);	
      this.generateSurvey = this.generateSurvey.bind(this);
      this.testPostRequest = this.testPostRequest.bind(this)	
  	}

	clearData(){
		this.setState({
			value:''
		})
	}
	handleChange(event){
		this.setState({
			value: event.target.value
		})

	}

	handleSubmit(event){
		event.preventDefault();
		if(this.state.value === ''){
			alert("imposible agregar campo vacio")
		}
		else{
			this.state.item.push(this.state.value)
			this.clearData()	
		}
	}
	generateSurvey(event){
		if(this.state.product ==='' || this.state.item.length === 0  ){
			alert("imposible generar encuesta")
		}else{
			console.log(this.state.item)
			console.log(this.state.product)
		}
	}
	deleteValue(Item){
		const newItems = this.state.item.filter(item=>{
			return item !== Item;
		})

		this.setState({
			item:[...newItems]
		})
	}

  testGetRequest(){
    axios.get(`http://127.0.0.1:8000/attributes/`)
    .then(res =>{
      console.log(res)
    })
  }

  testPostRequest(event){
    //event.preventDefault();
    //let myvar = this.state.value
    axios.post(`http://127.0.0.1:8000/attributes/`,{
      //product_name:1,
      //attribute:myvar
    })
    .then(res=>{
      console.log(res)
    })
  }

  testDeletetRequest(eve){
    axios.delete(`http://127.0.0.1:8000/attributes/${eve}`,{
    })
    .then(res=>{
      console.log(res);
    })
  }

	render(){
		const {item} = this.state;

		return(

			<div className="container">
			
				<div className="row">
					<div className="col Product-Title">
						<InputLabel focused={true} children="Agregue el Servicio/Producto aqui"/>
						<Input
						fullWidth={true}
						placeholder="Nombre del producto"
						value={this.state.product}
						/>
					</div>
				</div>
				<form onSubmit={this.handleSubmit}>
					<div className="row align-items-center">
						<div className="col myFormular">
								<Card className="myCard" raised={true} >
									<CardHeader title="Atributos" style={{"textAlign":"center"}}/>
										<CardContent>
											<div className="row">
												<div className="col">
													<Input
														fullWidth={true}
														value={this.state.value}
														onChange={this.handleChange}
													/>
												</div>
											</div>
											<div className="row mybtn">
												<Button size="large" 
													fullWidth={true} 
													color="primary" 
													variant="contained"
													onClick={this.handleSubmit}>Agregar Atributo
												</Button>
											</div>
										</CardContent>
								</Card>
						</div>
						<div className="col Attributes-Holder">
							<Card className="myCard" raised={true} style={{"overflow":"auto"}}>
								<CardHeader title="Lista Atributos" style={{"textAlign":"center"}} />
									<CardContent>
										<div className="row">
											<List >
												<ul>
												
												{
													item.map((newItem,index)=>{
														return(
															
																<List key={index} >
																	
																	<Button onClick={(e)=> this.deleteValue(newItem)} >
																		{newItem}
																	</Button>
																</List>
															)
													})
												}
												</ul>
											</List>
										</div>
									</CardContent>
							</Card>
						</div> 
					</div>
				</form>
				<div className="container">
					<div className="row align-items-center btn">
						<div className="col">
							<Button  
								size="large" variant="contained"  
								style={{"backgroundColor":green['A700'],"color":"white" }} 
								fullWidth={true} >Generar Encuesta
							</Button>
						</div>									
					</div>
				</div>
		
			</div>

			)
	}
}