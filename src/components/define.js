import React from 'react';



import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';


import Input from '@material-ui/core/Input';



import Container from '@material-ui/core/Container';

import tablePad from '../images/icons/tablePad.png'


import List from '@material-ui/core/List';



export default class Define extends React.Component{
	render(){
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
									<h1>Product/Service</h1>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-12 col-md-6">
									<Card raised={true}>
										<CardHeader title="Attribute List" disableTypography={true} style={{"textAlign":"center", "fontSize":"36px"}}/>
											<CardContent style={{"overflow":"auto", "height":"302px"}}>
												<List>
													<ul>
													<List>
														<div className="row">
															<div className="col-12 col-md-6">
																1.-Attribute 
															</div>
														</div>
													</List>
													</ul>
												</List>
											</CardContent>
											
									</Card>
								</div>
							</div> 
						</div>
						<div className="col-12 col-md-6 dis-col-def">
							<div className="row justify-content-center" style={{"marginTop":"150px"}}>
								<div className="col-12 col-md-3">
									<img src={ tablePad } />
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-8">
									<h1 style={{"fontSize":"48px"}}>In this phase the survey based on the kano model is going to be generated</h1>
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-4">
									<Button 
									variant="contained"
									style={{"backgroundColor":"black", "color":"white","fontFamily":"Righteous", "fontSize":"24px"}}
									>Generate Survey</Button>
								</div>
							</div>
						</div>
					</div>
				</div>

			)
	}
}