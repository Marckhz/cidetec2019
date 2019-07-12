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

import { connect } from 'react-redux';

class Formular extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			user: props.user,
			product:'',
			value:'',
			item:[],
			my_item:''
		}
	//console.log(props.user)
  	  this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);	
     
      this.handleProductChange = this.handleProductChange.bind(this);

      this.postCreateProduct = this.postCreateProduct.bind(this);

  	}

	clearData(){
		this.setState({
			value:'',
		})
	}
	handleChange(event){
		this.setState({
			value: event.target.value,
		})

	}
  	handleProductChange(event){
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
			console.log(this.state.item)
		}
	}

	postCreateProduct(event){

		axios.post(`http://0.0.0.0:5000/create`,{
			"username":this.state.user.username,
			"product":this.state.product,
			"attributes":this.state.my_item,

		})
	}

	render(){
		const {item} = this.state;

		return(

			<div className="container">
				<h1></h1>		
				<div className="row">
					<div className="col Product-Title">
						<InputLabel children="Agregue el Servicio/Producto aqui"/>
             			 <Input onChange={this.handleProductChange} 
              				value={this.state.product} 
              				/>
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
													onClick={this.postCreateProduct}>Agregar Atributo
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
								fullWidth={true} 
								
								>Generar Encuesta

							</Button>
						</div>									
					</div>
				</div>
		
			</div>

			)
	}
}


function mapStateToProps(state, ownProps){
	return {
		user: state.user
	}
}
export default connect(mapStateToProps)(Formular);