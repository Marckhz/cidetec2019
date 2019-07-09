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
			item:[],
			id_holder:'',
			item_id_holder:[]
		}
  	  this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);	
      this.generateSurvey = this.generateSurvey.bind(this);
      this.postProducto = this.postProducto.bind(this);
      this.deleteValue = this.deleteValue.bind(this);
      this.addAtrribute= this.addAtrribute.bind(this);
      this.handleProductTitleChange = this.handleProductTitleChange.bind(this);
      this.testDeletetRequest = this.testDeletetRequest.bind(this);
  	}

	clearData(){
		this.setState({
			value:'',
      		//product:''
		})
	}
	handleChange(event){
		this.setState({
			value: event.target.value,
		})

	}
  handleProductTitleChange(event){
    this.setState({
      product: event.target.value,
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
	  postProducto(event){
	    event.preventDefault();
	    let productName = this.state.product
	    axios.post(`http://127.0.0.1:8000/products/`,{
	      product:productName
	    })
	    .then(res=>{
	     	this.state.id_holder = res.data['id']
	      	console.log(this.state.id_holder, res.data['product'])
	    })
	  }
	  addAtrribute(event){
	    event.preventDefault();
	    //console.log(this.state.id_holder)
	    let new_attribute = this.state.value
	    axios.post(`http://127.0.0.1:8000/attributes/`,{
	    	product_name:this.state.id_holder,
	    	attribute: new_attribute
	    })
	    .then(res=>{
	    	console.log(res.data)
	    	this.state.item.push(new_attribute);
	    	this.state.item_id_holder.push(res.data['id'])
	    	console.log(this.state.item)
	    	//console.log(this.state.item_id_holder)
	    	this.clearData();
	    	})
		}
 

	  testGetRequest(){
	    axios.get(`http://127.0.0.1:8000/attributes/`)
	    .then(res =>{
	      console.log(res)
	    })
	  }

	  deleteValue(Item){
		const newItems = this.state.item.filter(item=>{
			return item !== Item;
		})

		this.setState({
			item:[...newItems]
		})
	}

	render(){
		const {item} = this.state;

		return(

			<div className="container">		
				<div className="row">
					<div className="col Product-Title">
						<InputLabel children="Agregue el Servicio/Producto aqui"/>
              <Input onChange={this.handleProductTitleChange} 
              value={this.state.product} 
              />
					</div>
					<div className="col Product-Title">
            			<Button onClick={this.postProducto} variant="contained" color="primary"> Agrega Nombre producto</Button>	
					</div>
				</div>
				<form onSubmit={this.handleSubmit}>
					<div className="row align-items-center">
						<div className="col myFormular">
								<Card className="myCard" raised={true} >
									<CardHeader title="Atributos" style={{"textAlign":"center"}}/>
										<CardContent className="Card-Body">
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
												<Button  style={{"margin":"auto"}} size="large" 
													
													color="primary" 
													variant="contained"
													onClick={this.addAtrribute}>Agregar Atributo
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
																	
																	 
																		{newItem}
																	
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