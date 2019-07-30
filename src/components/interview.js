import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';


import target from '../images/icons/target.png';
import monitos from '../images/icons/monitos.png';


export default class Interview extends React.Component{
	constructor(props){
		super(props)

	}render(){
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
									<h3>Male <Checkbox color="default"/> </h3>
								</div>
								<div className="col-12 col-md-4">
									<h3>Female <Checkbox color="default"/> </h3>
								</div>
							</div>
							<div className="row" style={{"marginLeft":"60px"}}>
								<div className="col-12 col-md-4">
									<h2 style={{"marginTop":"25px","color":"rgba(0,0,0,50%)"}}>Age Range </h2>
								</div>
							</div>
							<div className="row justify-content-start" style={{"marginLeft":"80px"}}>
								<div className="col-12 col-md-2">
									<NativeSelect>
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
									<NativeSelect>
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