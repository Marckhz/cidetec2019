import React from 'react';



import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';

import Icon from '@material-ui/core/Icon';

import Mesa from '../images/icons/mesa.png';
import ChexBoxOne from '../images/icons/checkOneBox.png';

export default class Classification extends React.Component{
	constructor(props){
		super(props);
	}render(){
		return (

				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-6">
							<div className="row">
								<div className="col-12 col-md-8 emp-title">
									<h1> EMPHATIZE </h1>
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-6">
									<h1>E3.-Attributes Classification</h1>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-12 col-md-10">
									<Card raised={true}>
										<CardHeader title="Attributes List" disableTypography={true} style={{"textAlign":"center", "fontSize":"36px"}}/>
											<CardContent style={{"overflow":"auto", "height":"302px"}}>
											</CardContent>
									</Card>
								</div>
								<div className="col-12 col-md-2">
									<div className="row justify-content-center">
										<Button variant="outlined"
										fullWidth={true} 
										style={{"border":"3px solid", "color":"black"}}> <Icon> arrow_right_alt</Icon> </Button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 dis-col">
							<div className="row justify-content-center">
								<div className="col-12 col-md-3">
									<img src={Mesa}/>
								</div>
								<div className="col-12 col-md-3">
									<img src={ChexBoxOne}/>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-12 col-md-6">
									<Card raised={true}>
										<CardHeader title="Finals" disableTypography={true} style={{"fontSize":"36px", "textAlign":"center"}} />

									</Card>
								</div>
							</div>

						</div>
					</div>
				</div>
			)
	}
}