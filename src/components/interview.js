import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';

import { connect } from 'react-redux';
import  { push } from 'react-router-redux';

import { registerInterview } from '../requests/requestsProducts';

import * as actions from '../actions/productActions';


import target from '../images/icons/target.png';
import monitos from '../images/icons/monitos.png';


class Interview extends React.Component{
	constructor(props){
		super(props);
		console.log(props);
		//this.slug = this.props.match.params.slug;
		const slug = props.product.product


		this.state = {
			market:'',
			female:'',
			male:'',
			age_range_start:'',
			age_range_end:'',
			description:'',
		}

		this.onMarketChange = this.onMarketChange.bind(this);
		this.onGenderMaleChange = this.onGenderMaleChange.bind(this);
		this.onGenderFemaleChange = this.onGenderFemaleChange.bind(this);
		this.onAgeStartChange = this.onAgeStartChange.bind(this);
		this.onAgeEndChange = this.onAgeEndChange.bind(this);
		this.onDescriptionChange = this.onDescriptionChange.bind(this);
		this.postInterviewData = this.postInterviewData.bind(this);
	}

	onMarketChange(event){
		this.setState({
			market:event.target.value
		})
		//console.log(this.state.market)
	}
	onGenderMaleChange(event){
		this.setState({
			male:event.target.value
		})
		console.log(this.state.male)
	}
	onGenderFemaleChange(event){
		this.setState({
			female:event.target.value
		})
		console.log(this.state.female)
	}
	onAgeStartChange(event){
		this.setState({
			age_range_start:event.target.value
		})
	}
	onAgeEndChange(event){
		this.setState({
			age_range_end:event.target.value
		})
	}
	onDescriptionChange(event){
		this.setState({
			description:event.target.value
		})
	}
	postInterviewData(){

		if(this.state.market ==='' || this.state.age_range_start ==='' || this.state.age_range_end ==='' || this.state.description ===''){
			alert("Revisar informacion por favor")
		}else{
			if(this.state.male ==='0' && this.state.female ===''){
				const data = {			
									"market":this.state.market,
									"gender":this.state.male,
									"age_range_start":this.state.age_range_start,
									"age_range_end":this.state.age_range_end,
									"description":this.state.description,
						}
						console.log(data)
				registerInterview(this.props.product.product, data, this.props.user.jwt).then(response=>{
					console.log(response)
					if(response.status === 200){
						this.props.history.push('/emphatize/derivation/'+this.props.product.product)
					}
				})
			}
			if(this.state.female ==='1' && this.state.male===''){
				const data = {
					"market":this.state.market,
					"gender":this.state.female,
					"age_range_start":this.state.age_range_start,
					"age_range_end":this.state.age_range_end,
					"description":this.state.description,
					"product_name":this.slug,
				}
				registerInterview(this.props.product.product, data, this.props.user.jwt).then(response=>{
					if(response.status === 200){
						this.props.dispatch.push('/emphatize/derivation/'+this.props.product.product)
					}
				})
			}
			if(this.state.female ==='1' && this.state.male ==='0'){
				const data = { 
					"market":this.state.market,
					"gender":[this.state.male, this.state.female],
					"age_range_start":this.state.age_range_start,
					"age_range_end":this.state.age_range_end,
					"description":this.state.description,
					"product_name":this.slug,
				}
				registerInterview(this.props.product.product, data, this.props.user.jwt).then(response=>{
					if(response.status === 200){
						const bool = true
						this.props.history.push('/emphatize/derivation/'+this.props.product.product)
					}
				})			
			}
		}
	}
	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-md-6">
							<div className="row">
								<div className="col-12 col-md-8 emp-title">
									<h1> EMPHATIZE </h1>
								</div>
							</div>
							<div className="row justify-content-start interview-head">
								<div className="col-12 col-md-6">
									<h1>E1.- Interview </h1>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-6">
									<TextField
									onChange={this.onMarketChange} 
									variant="outlined" 
									placeholder="Market"
									fullWidth={true}
									style={{"marginLeft":"80px"}}
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-4">
									<h2 style={{"marginTop":"25px","marginLeft":"80px", "color":"rgba(0,0,0,50%)"}}>Gender</h2>
								</div>
							</div>
							<div className="row justify-content-start" style={{"width":"80%", "marginLeft":"80px"}}>
								<div className="col-12 col-md-4">
									<h3>Male <Checkbox color="default" onChange={this.onGenderMaleChange} value="0"/> </h3>
								</div>
								<div className="col-12 col-md-4">
									<h3>Female <Checkbox color="default" onChange={this.onGenderFemaleChange} value="1" /> </h3>
								</div>
							</div>
							<div className="row" style={{"marginLeft":"60px"}}>
								<div className="col-12 col-md-4">
									<h2 style={{"marginTop":"25px","color":"rgba(0,0,0,50%)"}}>Age Range </h2>
								</div>
							</div>
							<div className="row justify-content-start" style={{"marginLeft":"80px"}}>
								<div className="col-12 col-md-2">
									<NativeSelect onChange={this.onAgeStartChange}>
													<option value=""/>
													<option value={10}>10</option>
													<option value={20}>20</option>
													<option value={30}>30</option>
													<option value={40}>40</option>
													<option value={50}>50</option>
													<option value={60}>60</option>
													<option value={70}>70</option>
													<option value={80}>80</option>
													<option value={90}>90</option>
													<option value={100}>100</option>
									</NativeSelect>
								</div>
								<div className="col-12 col-md-2">
									<h3 style={{"color":"rgba(0,0,0,50%)"}}>to</h3>
								</div>
								<div className="col-12 col-md-2">
									<NativeSelect onChange={this.onAgeEndChange}>
													<option value=""/>
													<option value={10}>10</option>
													<option value={20}>20</option>
													<option value={30}>30</option>
													<option value={40}>40</option>
													<option value={50}>50</option>
													<option value={60}>60</option>
													<option value={70}>70</option>
													<option value={80}>80</option>
													<option value={90}>90</option>
													<option value={100}>100</option>
									</NativeSelect>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-4">
									<h2 style={{"marginTop":"25px","marginLeft":"80px", "color":"rgba(0,0,0,50%)"}}>Description</h2>
								</div>
							</div>
							<div className="row" style={{"marginLeft":"80px"}}>
								<div className="col-12 col-md-8">
									<TextField
									onChange={this.onDescriptionChange}
									variant="outlined"
									multiline= {true}
									rows="10"
									fullWidth={true}	
									/>
								</div>
							</div>
					</div>
					<div className="col-12 col-md-6 dis-col">
						<div className="row justify-content-center" style={{"marginTop":"200px"}}>
							<div className="col-12 col-md-3">
								<img src={target}/>
							</div>
							<div className="col-12 col-md-3">
								<img src={monitos}/>
							</div>
						</div>
						<div className="row justify-content-center" style={{"marginTop":"25px"}}>
							<div className="col-12 col-md-10">
								<h1 style={{"fontSize":"64px", "color":"black"}}>In this section you must define the potential market of your product or service</h1>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-12 col-md-2">
								<Button
								onClick={this.postInterviewData} 
								style={{"marginTop":"25px","backgroundColor":"black", "color":"white", "fontSize":"24px", "fontFamily":"Righteous"}}
								variant="contained"
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
export default connect(mapStateToProps)(Interview);