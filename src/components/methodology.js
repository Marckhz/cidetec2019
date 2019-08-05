import React from 'react';



import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';





export default class Methodology extends React.Component{
	constructor(props){
	super(props);
	
	this.state = {
		newProduct:true,
	}	
	
}render(){
	const {newProduct} = this.state
	return(
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-6">
							<div className="row">
								<div className="col-12 col-md-8 define-title">
									<h1> DEFINE </h1>
								</div>
							</div>
							<div className="row product-title">
								<div className="col-12 col-md-6">
									<h1>Methodology</h1>
								</div>
							</div>
							{newProduct ?
								<div className="row justify-content-center">
									<div className="col-12 col-md-6">
										<h1>New Product/Service</h1>
									</div>
								</div>
								:
								<div className="row justify-content-center">
									<div className="col-12 col-md-6">
										<Card raised={true}>
											<CardHeader disableTypography={true} style={{"fontSize":"36px","textAlign":"center"}} title="Knwon Product"/>
												<CardContent style={{"height":"302px"}}>
													<RadioGroup>
														<FormControlLabel control={<Radio color="primary" value="Yang"/> } label="Yang" labelPlacement="end" style={{"fontSize":"24px",  "fontFamily":"Righteous"}}/>
														<FormControlLabel control={<Radio color="primary" value="Tontini"/> } label="Tontini" labelPlacement="end" style={{"fontSize":"24px",  "fontFamily":"Righteous"}}/>
													</RadioGroup>
												</CardContent>
										</Card>
									</div>
								</div>
							}
						</div>
						<div className="col-12 col-md-6 dis-col-def">
							<div className="row justify-content-center" style={{"marginTop":"250px"}}>
								<div className="col-12 col-md-10">
									<h4>Yang Methodology uses the Refined Kano’s Model and the relevance satisfaction model</h4>
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-10">
									<h4>Tontini model is a modified version of Kano’s model, which in addition to classifying the attributes, presents the satisfaction and dissatisfaction score of each attribute.</h4>
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"100px"}}>
								<div className="col-12 col-md-3">
									<Button variant="contained"
									fullWidth={true}
									style={{"backgroundColor":"black", "color":"white", "fontSize":"24px", "fontFamily":"Righteous"}}>Send</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
	}
}