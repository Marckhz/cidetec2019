import React from 'react';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import GraphIcon from '../images/icons/grafiquita.png'

import { connect } from 'react-redux';

import { getTotalSurveysByUser, getTotalSurveysCounter } from '../requests/requestsProducts';


class DefineTotalSurvey extends React.Component{
	constructor(props){
		super(props);

		this.state = {

			total_survey:'',
			counter_survey:''
		}
		this.getTotalSurveys();
		this.getSurveysSofar();
	}

	getTotalSurveys(){
		getTotalSurveysByUser(this.props.product.product, this.props.user.jwt).then(response=>{
			this.setState({
				total_survey:response.docs.number_surveys
			})
		}).catch(error=>{console.log(error)})
	}

	getSurveysSofar(){
		getTotalSurveysCounter(this.props.product.product, this.props.user.jwt).then(response=>{
			this.setState({
				counter_survey:response.docs
			})
		}).catch(error=>{console.log(error)})
	}


	render(){
		const {total_survey, counter_survey} = this.state
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
													<h5>Total Surveys: {counter_survey} /{total_survey} </h5>
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

function mapStateToProps(state, ownProps){
	return {
		user: state.user,
		product:state.products
	}
}
export default connect(mapStateToProps)(DefineTotalSurvey);