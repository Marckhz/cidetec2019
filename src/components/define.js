import React from 'react';



import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';



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
									<Card>
										<CardHeader title="Attribute List"/>
									</Card>
								</div>
							</div> 
						</div>
						<div className="col-12 col-md-6 dis-col-def">
						</div>
					</div>
				</div>

			)
	}
}