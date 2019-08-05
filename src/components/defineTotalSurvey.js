import React from 'react';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import GraphIcon from '../images/icons/grafiquita.png'

export default class DefineTotalSurvey extends React.Component{
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
								<h1>TotalSurvey</h1>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-12 col-md-6">
								<Card raised={true}>
									<CardHeader disableTypography={true} style={{"textAlign":"center", "fontSize":"36px"}} title="Total Surveys"/>
										<CardContent style={{"height":"302px"}}>
											<div className="row">
												<div className="col-12 col-md-6">
													<h5>Total Surveys: </h5>
												</div>
											</div>
										</CardContent>
								</Card>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 dis-col-def">
						<div className="row justify-content-end" style={{"marginTop":"200px"}}>
							<div className="col-12 col-md-4">
								<img src={GraphIcon}/>
							</div>
						</div>
						<div className="row justify-content-center" style={{"marginTop":"25px"}}>
							<div className="col-12 col-md-8">		
								<h1>In this screen is shown the total number of surveys done againts the wished surveys</h1>
							</div>
						</div>
						<div className="row justify-content-center" style={{"marginTop":"25px"}}>
							<div className="col-12 col-md-4">
								<Button 
								style={{"backgroundColor":"black","color":"white","fontSize":"24px", "fontFamily":"Righteous"}}
								>Generate Analysis</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}
}