import React from 'react';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { postSurvey } from '../requests/requestsProducts';


/*usar la url para el post */

class RadioForm extends React.Component{
	constructor(props){
		super(props);
		console.log("soy props de radio button", props)
		console.log("user", this.props)

		this.state = {
			attr:['hola','marco', 'cesar'],
			negative:[],
			positive:[],
			button:false
			//user_info:{}

		}
		this.handleChangeRadioButtonsSurvey = this.handleChangeRadioButtonsSurvey.bind(this);
		this.postDataSurvey = this.postDataSurvey.bind(this);
		//this.hideButton();
	}

	handleChangeRadioButtonsSurvey(event, index){
		if(event.target.id.includes("No")){
			this.state.negative[event.target.id.slice(2,)] = index
		}else{
			this.state.positive[event.target.id.slice(2,)] = index
		}
		console.log(this.state.negative)
		console.log(this.state.positive)
	}
	
	postDataSurvey(){
		const survey_data ={
			"clients":[{
				"user_info":this.props.user_info,
				"results":{
					"positive":this.state.positive,
					"negative":this.state.negative
					}
				}]
		}	
	if(Object.keys(this.state.positive).length === this.state.attr.length && Object.keys(this.state.negative) === this.state.attr.length){
		postSurvey(this.props.product.product, survey_data, this.props.user.username).then(response=>{
			if(response.status === 200){
				console.log(true)
			}
		})
		alert("La encuesta ha sido enviada")
		//return <Redirect to='/'/>		
	}else{
		alert("favor de llenar todos los campos")
	}
		console.log(survey_data);
	}
	checkData(){
		if(Object.keys(this.state.positive).length === this.state.attr.length && Object.keys(this.state.negative).length === this.state.attr.length){
			this.setState({
				button:true
			})
		}
	}

	render(){
		const {attr, button} = this.state
		return(
			<section>
			<Card raised={true}>
					<CardHeader/>
						<CardContent>
							<div className="row justify-content-center">
								<div className="col-12 col-md-12">
									{attr.map((key, index)=>{
													return(
																<List key={index}>
																	<h2 style={{"fontWeight":"bold", "color":"black"}}>Como te sentirias si el producto tuviera el attributo <h2 style={{"color":"blue", "display":"inline-block"}}>{key}</h2> </h2>
																		<RadioGroup style={{"display":"flex", "flexDirection":"col"}} onChange={this.handleChangeRadioButtonsSurvey}>
																			<FormControlLabel  control={<Radio color="primary" value="1" id={"Si"+key} />}  label="a) No me gusta"/>
																			<FormControlLabel  control={<Radio color="primary" value="2" id={"Si"+key} />}  label="b) Puedo vivir sin eso"/>
																			<FormControlLabel  control={<Radio color="primary" value="3" id={"Si"+key} />}  label="c) Soy neutral"/>
																			<FormControlLabel  control={<Radio color="primary" value="4" id={"Si"+key} />}  label="d) Debe estar presente"/>
																			<FormControlLabel  control={<Radio color="primary" value="5" id={"Si"+key} />}  label="e) Me gustaria"/>
																		</RadioGroup>
																		<h2 style={{"fontWeight":"bold", "color":"black"}}>Como te sentirias si el producto <h2 style={{"color":"red", "display":"inline-block"}}>NO</h2> tuviera el attributo <h2 style={{"color":"blue", "display":"inline-block"}}>{key}</h2></h2>
																			<RadioGroup onChange={this.handleChangeRadioButtonsSurvey} style={{"display":"flex", "flexDirection":"col"}}>
																				<FormControlLabel value="1" control={<Radio color="primary" value="1" id={"No"+key}/>}  label="a) No me gusta"/>
																				<FormControlLabel value="2" control={<Radio color="primary"value="2"  id={"No"+key}/>}  label="b) Puedo vivir sin eso"/>
																				<FormControlLabel value="3" control={<Radio color="primary" value="3" id={"No"+key}/>}  label="c) Soy neutral"/>
																				<FormControlLabel value="4" control={<Radio color="primary" value="4" id={"No"+key}/>}  label="d) Debe estar presente"/>
																				<FormControlLabel value="5" control={<Radio color="primary" value="5" id={"No"+key}/>}  label="e) Me gustaria"/>
																			</RadioGroup>
																</List>
																	)
																})
														}
											

								</div>
							</div>
						</CardContent>
				</Card>
					{button ?  <div className="row justify-content-center">
												<div className="col-12 col-md-4">
													<Button variant="contained"
													color="primary"
													fullWidth={true}
													onClick={this.postDataSurvey}
													style={{"fontSize":"24px", "fontFamily":"Righteous"}}>Finalizar</Button>
												</div>
											</div>: null } 		

			</section>
			)
	}
}

function mapStateToProps(state, ownProps){
	return {
		user: state.user,
		product:state.products
	}
}
export default connect(mapStateToProps)(RadioForm);

