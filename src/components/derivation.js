import React from 'react';

import axios from 'axios';



import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';


import EmptyChecboxPng from '../images/icons/emptyCheckbox.png';
import monitos from '../images/icons/monitos.png';


import { green } from '@material-ui/core/colors';

import { connect } from 'react-redux';

class Derivation extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			user: props.user,
			product:'',
			value:'',
			attributes:[],
			dict:{},
			item:[]
			//x = {}
		}
	//console.log(props.user)
  	  this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);	
     
      this.handleProductChange = this.handleProductChange.bind(this);
      this.createProduct = this.createProduct.bind(this);
      //this.postCreateProduct = this.postCreateProduct.bind(this);

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
			var x = this.state.value;
			this.state.dict = {[x]:""}
			this.state.attributes.push(this.state.dict)
			this.state.item.push(x)
			this.clearData()	
			console.log(this.state.attributes)
		}
	}

	createProduct(){
		const product_data = {
			username: this.props.user,
			product:this.state.product,
			attributes:this.state.attributes
		}
	}
	render(){
		const {item} = this.state;
		return(

			<div className="container-fluid">		
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="row">
							<div className="col-12 col-md-8 emp-title">
								<h1> EMPHATIZE </h1>
							</div>
						</div>
						<div className="row justify-content-center" style={{"marginTop":"25px"}}>
							<div className="col-12 col-md-6">
								<h1>E2.- Attributes Derivation</h1>
							</div>
						</div>
						<div className="row justify-content-center" style={{"marginTop":"25px"}}>
							<div className="col-12 col-md-6">
								<TextField 	
								variant="outlined" 
								placeholder="Attribute"
								fullWidth={true}
								/>
							</div>	
						</div>
						<div className="row justify-content-center" style={{"marginTop":"25px"}}>
							<div className="col-12 col-md-6">
								<Button
								style={{"backgroundColor":"black", "color":"white", "fontSize":"24px", "fontFamily":"Righteous"}}
								variant="contained"
								fullWidth={true} 
								>Add </Button>
							</div>
						</div>
						<div className="row justify-content-center" style={{"marginTop":"25px"}}>
							<div className="col-12 col-md-6">
								<Card raised={true}>
									<CardHeader title="Attribute List" disableTypography={true} style={{"textAlign":"center", "fontSize":"36px"}}/>
										<CardContent style={{"overflow":"auto", "height":"302px"}}>
										<List>
											<ul>
												{
													item.map((newItem, index)=>{
													return(
															<List key={index}>
																{newItem}
															</List>
														)
													})
												}
											</ul>
										</List>
										</CardContent>
								</Card>
							</div>
						</div> 
					</div>
					<div className="col-12 col-md-6 dis-col">
						<div className="row justify-content-center" style={{"marginTop":"200px"}}>
							<div className="col-12 col-md-3">
								<img src={EmptyChecboxPng} />
							</div>
							<div className="col-12 col-md-3">
								<img src={monitos}/>
							</div>
						</div>
						<div className="row justify-content-center" style={{"marginTop":"25px"}}>
							<div className="col-12 col-md-8">
								<h1 style={{"color":"black", "fontSize":"64px"}}>In this section you must add the attributes collected in phase 1</h1>
							</div>
						</div>
						<div className="row justify-content-center" style={{"marginTop":"25px"}}>
							<div className="col-12 col-md-2">
								<Button variant="contained" 
								style={{"fontSize":"24px", "fontFamily":"Righteous","backgroundColor":"black", "color":"white"}}  
								fullWidth={true}
								>Send</Button>	
							</div>
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
export default connect(mapStateToProps)(Derivation);