import React from 'react';
import TextField from '@material-ui/core/TextField';



import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Checkbox from '@material-ui/core/Checkbox';

import MonitoNegro from '../images/icons/monitoNegro.png';
import Button from '@material-ui/core/Button';


import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';


import { getProfessions,postDefineProfile } from '../requests/clientsRequests';

import { connect }  from 'react-redux';
/*

Deberia guardar la informacion del
esta definicion de perfil?
*/

class DefineProfile extends React.Component{
	constructor(props){
		super(props);
		console.log(props.user.jwt)
		this.state = {
			profession:'',
			male:null,
			female:'',
			age_range_start:'',
			age_range_end:'',
			select_professions:[]
		}

		this.onProfessionChange = this.onProfessionChange.bind(this);
		this.onGenderMaleChange = this.onGenderMaleChange.bind(this);
		this.onGenderFemaleChange = this.onGenderFemaleChange.bind(this);
		this.onAgeStartChange = this.onAgeStartChange.bind(this);
		this.onAgeEndChange = this.onAgeEndChange.bind(this);
		this.getData();
		this.postBulkEmailData = this.postBulkEmailData.bind(this);
	}

	onProfessionChange(event){
		this.setState({
			profession:event.target.value
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

	getData(){
		getProfessions(this.props.user.jwt).then(response=>{
			console.log(response.docs)
			this.setState({
				select_professions:[response.docs.profession]
			})
		}).catch(error=>{console.log(error)})
	}

	postBulkEmailData(){
		if(this.state.profession === '' && this.state.age_range_start ==='' && this.state.age_range_end ==='' && this.state.male===null && this.state.female ===null){
			alert("campos vacios")
		}else{
			const data = {
				"occupation":this.state.profession,
				"age_range_start":this.state.age_range_start,
				"age_range_end":this.state.age_range_end,
				"male":this.state.male,
				"female":this.state.female,
				"url":"survey/"+this.props.user.username+"/"+this.props.product.product
			}
			postDefineProfile(data, this.props.user.jwt).then(response=>{
				console.log(response)
				if(response.status === 200){
					alert("invitacion enviada!!!")
					this.props.history.push("/define/define-total-survey/"+this.props.product.product)
				}else{
					alert("no has enviado nada?")
				}
			}).catch(error=>{console.log(error)})
			console.log(data)
		}
	}

	render(){
		const {select_professions} = this.state
		return(
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-6">
							<div className="row">
								<div className="col-12 col-md-8 define-title">	
									<h1> DEFINE </h1>
								</div>
							</div>
							<div className="row justify-content-start interview-head">
								<div className="col-12 col-md-6">
									<h1>Define Profile </h1>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-6" >
									<NativeSelect
									onChange={this.onProfessionChange}
									style={{"marginLeft":"80px"}} 
									variant="filled"
									placeholder="Profession"
									fullWidth={true}>
									<option value=""/>
								{
									select_professions.map((key,index)=>{
										return(
												<option value={key}>{key} </option>
											)
									})
								}
									</NativeSelect>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-4">
									<h2 style={{"marginTop":"25px","marginLeft":"80px", "color":"rgba(0,0,0,50%)"}}>Gender</h2>
								</div>
							</div>
							<div className="row justify-content-start" style={{"width":"80%", "marginLeft":"80px"}}>
								<div className="col-12 col-md-4">
									<h3>Male <Checkbox color="default" onChange={this.onGenderMaleChange} value="M"/> </h3>
								</div>
								<div className="col-12 col-md-4">
									<h3>Female <Checkbox color="default" onChange={this.onGenderFemaleChange} value="F" /> </h3>
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
						</div>
						<div className="col-12 col-md-6 dis-col-def">
							<div className="row justify-content-center" style={{"marginTop":"200px"}}>
								<div className="col-12 col-md-2">
									<img src={MonitoNegro}/>
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-8">
									<h1>In this section you must define the potential market of your Product or Service</h1>
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"25px"}}>
								<div className="col-md-3">
									<Button variant="contained"
									onClick={this.postBulkEmailData}
									fullWidth={true}
									style={{"backgroundColor":"black","color":"white","fontSize":"24px", "fontFamily":"Righteous"}}>Send</Button>
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
export default connect(mapStateToProps)(DefineProfile);