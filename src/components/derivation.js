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

import { addAttributes } from '../requests/requestsProducts';
import  { push } from 'react-router-redux';


import { green } from '@material-ui/core/colors';

import { connect } from 'react-redux';

class Derivation extends React.Component{
	
	constructor(props){
		super(props);
		this.slug = this.props.match.params.slug
		this.state = {
			user: props.user,
			product:'',
			value:'',
			item:[]
			//x = {}
		}
	//console.log(props.user)
  	  this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);	
      this.postAttributes = this.postAttributes.bind(this);
      this.clearData = this.clearData.bind(this); 
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

	handleSubmit(event){
		event.preventDefault();
		if(this.state.value === ''){
			alert("imposible agregar campo vacio")
		}
		else{
			var x = this.state.value;
			//this.state.dict = {[x]:""}
			this.state.item.push(x)
			this.clearData()	
			console.log(this.state.item)
		}
	}
	deleteItem(newItem){
		const newItems = this.state.item.filter(items=>{
			return(items !== newItem)
		})
		this.setState({
			item:[...newItems]
		})
		console.log(this.state.item)
	}

	postAttributes(){
		if(this.state.item.length > 1){
			const data = {
				"attributes":this.state.item,
			}
			addAttributes(this.props.product.product, data, this.props.user.jwt).then(response=>{
				if(response.status === 200){
					this.props.history.push('/emphatize/classification/'+this.props.product.product)
				}
			})
		}else{
			alert("Hey there i guess you missing something")
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
								onChange={this.handleChange}	
								variant="outlined" 
								placeholder="Attribute"
								fullWidth={true}
								/>
							</div>	
						</div>
						<div className="row justify-content-center" style={{"marginTop":"25px"}}>
							<div className="col-12 col-md-6">
								<Button
								onClick={this.handleSubmit}
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
																<div className="row">
																	<div className="col-md-6">
																		{index+1}.-{newItem}
																	</div>
																	<div className="col-md-6">
																		<Button onClick={(e)=>this.deleteItem(newItem) } variant="outlined" style={{"border":"2px solid", "color":"red", "fontSize":"12px",  "fontFamily":"Righteous"}}>Remove</Button>
																	</div>
																</div>
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
								<Button 
								onClick={this.postAttributes}
								variant="contained" 
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
		user: state.user,
		product:state.products
	}
}
export default connect(mapStateToProps)(Derivation);