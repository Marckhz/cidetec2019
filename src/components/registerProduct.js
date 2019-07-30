import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';

import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';


import Logo from '../images/logo.png';

import { connect } from 'react-redux';

import * as actions from '../actions/userAction';

import  { push } from 'react-router-redux';





import { BrowserRouter as ReactRouter, Route, Link } from "react-router-dom";

import  teal from '@material-ui/core/colors/teal';



class RegisterProduct extends React.Component{
	constructor(props){
		super(props);



	}render(){
		return(
				<div className="container-fluid">
					<div className="row justify-content-around product-Form">
						<div className="col-12 col-md-4">
							<Card raised={true}>
								<CardHeader title="Register Product" disableTypography={true} style={{"textAlign":"center", "marginTop":"50px","fontSize":"36px","fontFamily":"Righteous" }}/>
								<CardContent>
									<div className="row justify-content-center">
										<div className="col-12 col-md-10">
											<TextField variant="outlined" 
											placeholder="producto" 
											fullWidth={true}
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-12 col-md-10">
											<RadioGroup className="radio-Form">
												<FormControlLabel control={<Radio color="primary" value="1"/> } label="New Product" labelPlacement="start" style={{"fontSize":"24px",  "fontFamily":"Righteous"}}/>
												<FormControlLabel control={<Radio color="primary" value="2"/> } label="Known Product" labelPlacement="start"/>
											</RadioGroup>
											<div className="row justify-content-end">
												<InputLabel htmlFor="age-native-simple" style={{"fontFamily":"Righteous", "fontSize":"18px"}}>Number Wished Surveys </InputLabel>
												<NativeSelect
													
												>
													<option value=""/>
													<option value={10}>10</option>
													<option value={20}>20</option>
													<option value={30}>30</option>
													<option value={40}>40</option>
													<option value={50}>50</option>
													<option value={60}>60</option>
												</NativeSelect>
											</div>
										</div>
									</div>
									<div className="row justify-content-center" style={{"marginTop":"100px", "marginBottom":"50px"}}>
										<div className="col-12 col-md-6">
											<Button style={{"backgroundColor":"black", "color":"white", "fontSize":"22px", "fontFamily":"Righteous", "margin":"0"}} variant="contained" 
											fullWidth={true}
											size="large"		
											> Continue </Button>
										</div>
									</div>
								</CardContent>

							</Card>
						</div>
						<div className="col-12 col-md-4">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae mi rhoncus, molestie quam in, tempus odio. Integer vel magna nec lectus hendrerit congue. Quisque luctus dictum ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vitae mi at sapien tristique dictum. Morbi fringilla est pellentesque enim consectetur tempus. Sed tincidunt ornare odio pharetra porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed accumsan ullamcorper lobortis. Proin condimentum, mauris quis mollis vestibulum, tortor magna sollicitudin eros, vel pellentesque mauris ligula sit amet orci. Praesent ut lacus orci.</p>
							<img src={Logo} style={{"width":"400x","height":"400px"}}/>
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
export default connect(mapStateToProps)(RegisterProduct);