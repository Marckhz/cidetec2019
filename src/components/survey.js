import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { withRouter } from 'react-router-dom';
import { getSingleProduct } from '../requests/requestsProducts';

import List from '@material-ui/core/List';

import GuestForm from './guestForm';

import Input from '@material-ui/core/Input';


import * as actions from '../actions/productActions';


class Survey extends React.Component{
constructor(props){
	super(props);
	const slug = props.match.params.slug;
	console.log(slug);
	console.log(props);
	

	this.loadSingleProduct(slug);
	this.handleChange = this.handleChange.bind(this);
	this.handleChangesShowSurvey = this.handleChangesShowSurvey.bind(this);

	this.state={
		showUserForm:true,
		showSurvey:false,
		product:{},
		attr:[],
		postive:{},
		negative:{},
		firstName:'',
		lastName:'',
		street:'',
		colony:'',
		postalCode:'',
		city:'',
		country:'',
		email:'',
		gender:'',
		age:'',
		occupation:'',
		workplace:'',
	}
}

loadSingleProduct(slug){
	getSingleProduct(slug).then(response=>{
		let json = response.docs;
		this.setState({
			product:json,
			attr:json.attributes
		})
		console.log(this.state.attr)
		console.log(this.state.product)
	})
}
handleChange(event, index){
	
	
	if(event.target.id.includes("No")){
		this.state.negative[event.target.id.slice(2,)] = index
	}else{
		this.state.postive[event.target.id.slice(2,)] = index
	}
	console.log(this.state.negative)
	console.log(this.state.postive)
}

handleChangesShowSurvey(event){
	this.setState({
		showUserForm:false,
		showSurvey:true
	})
}




render(){
	const {attr, showSurvey, showUserForm} = this.state
	return (
			<div className="container">
					 { showUserForm ? <Card>
							<CardHeader title="Para acceder a la Encuesta por favor complete la siguiente informacion"/>
							<CardContent className="card-guess-content">
								<div className="row guess-field">
									<div className="col-xs-12 col-md-8 guess-input-col">
										<Input fullWidth={true} placeholder="Nombre"/>
									</div>
								</div>
								<div className="row guess-field" >
									<div className="col-xs-12 col-md-8 guess-input-col">
										<Input fullWidth={true} placeholder ="Apellidos"/>
									</div>
								</div>
							<div className="row guess-field">
								<div className="col-xs-12 col-md-8 guess-input-col">
									<Input  fullWidth={true}placeholder="Calle"/>
								</div>
							</div>
							<div className="row guess-field">
								<div className="col-xs-12 col-md-8 guess-input-col">
									<Input fullWidth={true} placeholder="Colonia" />
								</div>
							</div>
							<div className="row guess-field">
								<div className="col-xs-12 col-md-8 guess-input-col">
									<Input  fullWidth={true} placeholder="codigo postal"/>
								</div>
							</div>
							<div className="row guess-field">
								<div className="col-xs-12 col-md-8 guess-input-col">
									<Input  fullWidth={true} placeholder="Municipio"/>
								</div>
							</div>
							<div className="row guess-field">
								<div className="col-xs-12 col-md-8 guess-input-col">
									<Input  fullWidth={true} placeholder="Pais"/>
								</div>
							</div>
							<div className="row guess-field">
								<div className="col-xs-12 col-md-8 guess-input-col">
									<Input fullWidth={true} placeholder="Correo"/>
								</div>
							</div>
							<div className="row guess-field">
								<div className="col-xs-12 col-md-8 guess-input-col">
									<Input fullWidth={true} placeholder="Sexo"/>
								</div>
							</div>
							<div className="row guess-field">
								<div className="col-xs-12 col-md-8 guess-input-col">
									<Input fullWidth={true} placeholder ="Edad"/>
								</div>
							</div>
							<div className="row guess-field">
								<div className="col-xs-12 col-md-8 guess-input-col">
									<Input  fullWidth={true} placeholder="Ocupacion"/>
								</div>
							</div>
							<div className="row guess-field">
								<div className="col-xs-12 col-md-8 guess-input-col">
									<Input fullWidth={true} placeholder="Lugar de Trabajo"/>
								</div>
							</div>
							<div className="row guess-btn">
								<div className="col-xs-12 col-md-8 guess-input-col">
						<Button className="guess-btn"
									variant="contained" 
									color="primary"
									onClick={this.handleChangesShowSurvey}
									>Siguiente</Button>
								</div>
							</div>
							</CardContent>
						</Card> : false } 
				<div className="container">			
					<div className="row">
						<div className="col-xs-12 col-md-12">
						{showSurvey ?  <Card className="Product-Card" raised={true} >
							<CardHeader title={"Nombre del producto " + this.state.product.product}/>
								<CardContent>
								<div className="row">
									<div className="col-xs-12 cold-md-8">
									<FormControl>
										<FormLabel component="legend"> </FormLabel>
											<ul>
												{attr.map((key, index)=>{
													return(
																
																<List key={index}>
																	<h2 style={{"fontWeight":"bold", "color":"black"}}>Como te sentirias si el producto tuviera el attributo {key} </h2>
																		<RadioGroup style={{"display":"flex", "flexDirection":"row"}} onChange={this.handleChange}>
																			<FormControlLabel  control={<Radio color="primary" value="1" id={"Si"+key} />}  label="No me gusta"/>
																			<FormControlLabel  control={<Radio color="primary" value="2" id={"Si"+key} />}  label="Puedo vivir sin eso"/>
																			<FormControlLabel  control={<Radio color="primary" value="3" id={"Si"+key} />}  label="Soy neutral"/>
																			<FormControlLabel  control={<Radio color="primary" value="4" id={"Si"+key} />}  label="Debe estar presente"/>
																			<FormControlLabel  control={<Radio color="primary" value="5" id={"Si"+key} />}  label="Me gustaria"/>
																		</RadioGroup>

																		<h2 style={{"fontWeight":"bold", "color":"black"}}>Como te sentirias si el producto NO tuviera el attributo {key}</h2>
																			<RadioGroup onChange={this.handleChange} style={{"display":"flex", "flexDirection":"row"}}>
																				<FormControlLabel value="1" control={<Radio color="primary" value="1" id={"No"+key}/> }  label="No me gusta"/>
																				<FormControlLabel value="2" control ={<Radio color="primary"value="2" id={"No"+key}/>}  label="Puedo vivir sin eso"/>
																				<FormControlLabel value="3" control={<Radio color="primary" value="3" id={"No"+key}/>}  label="Soy neutral"/>
																				<FormControlLabel value="4" control={<Radio color="primary" value="4" id={"No"+key}/>}  label="Debe estar presente"/>
																				<FormControlLabel value="5" control={<Radio color="primary" value="5" id={"No"+key}/>}  label="Me gustaria"/>
																			</RadioGroup>
																</List>
																	)
																})
															}
											</ul>
											<Button variant="contained" color="primary"> Aceptar </Button>
									</FormControl>

									</div>
								</div>
							</CardContent>
							</Card> : true }
								
						</div>
							
						</div>	
				</div>
			</div>
			
		)
}
}
export default withRouter(Survey)
