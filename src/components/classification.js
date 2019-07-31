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
								<div className="col-12 col-md-8">
									<h1>E3.-Attributes Classification</h1>
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-8">
									<Card raised={true}>
										<CardHeader title="Attributes List" disableTypography={true} style={{"textAlign":"center", "fontSize":"36px"}}/>
											<CardContent style={{"overflow":"auto", "height":"302px"}}>
											</CardContent>
									</Card>
								</div>
								<div className="col-12 col-md-2">
									<div className="row justify-content-center">
										<p style={{"zIndex":"10", "position":"absolute", "marginLeft":"235px", "marginTop":"60px", "width":"350px", "fontSize":"14px"}}>Click into the arrow to add attributes</p>
										<Button variant="outlined"
										style={{"border":"3px solid", "color":"black", "zIndex":"10","position":"absolute", "marginLeft":"180px","marginTop":"100px", "width":"250px"}}> <Icon> arrow_right_alt</Icon> </Button>
									</div>
								</div>
							</div>
						</div>
						<div>
						</div>
						<div className="col-12 col-md-6 dis-col">
							<div className="row justify-content-center" style={{"marginTop":"180px"}}>
								<div className="col-12 col-md-3">
									<img src={Mesa}/>
								</div>
								<div className="col-12 col-md-3">
									<img src={ChexBoxOne}/>
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-8">
									<Card raised={true}>
										<CardHeader title="Finals" disableTypography={true} style={{"fontSize":"36px", "textAlign":"center"}} />
											<CardContent style={{"overflow":"auto", "height":"302px"}}>

											</CardContent>
									</Card>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-12 col-md-2">
									<Button variant="contained"
									fullWidth={true} 
									style={{"backgroundColor":"black", "color":"white", "fontSize":"24px", "fontFamily":"Righteous", "marginTop":"25px"}}
									>Finish</Button>
								</div>
							</div>

						</div>
					</div>
				</div>
			)
	}
}