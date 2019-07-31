import React from 'react';




import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';


import FullCheckBox from '../images/icons/fullChecbox.png'


export default class FinalAttributes extends React.Component{
	constructor(props){
		super(props);
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
							<div className="row justify-content-center" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-8">
									<h1>E4.-Final Attributes</h1>
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-8">
									<Card raised={true}>
										<CardHeader title="Attributes List" disableTypography = {true} style={{"textAlign":"center", "fontSize":"36px"}}/>
										<CardContent style={{"overflow":"auto", "height":"302px"}}>
										</CardContent>
									</Card>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 dis-col">
							<div className="row justify-content-end" style={{"marginTop":"150px"}}>
								<div className="col-12 col-md-6">
									<img src={FullCheckBox} />
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"50px"}}>
								<div className="col-12 col-md-8">
									<h1 style={{"fontSize":"48px"}}>Congratulations! These are your final attributes </h1>
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"50px"}}>
								<div className="col-12 col-md-4">
									<p>Are you sure to continue?</p>
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"50px"}}>
								<div className="col-12 col-md-3">
									<Button color="secondary"variant="outlined" style={{"fontFamily":"Righteous", "fontSize":"24px"}}>Cancel</Button>
								</div>
								<div className="col-12 col-md-3">
									<Button variant="contained" style={{"color":"white","backgroundColor":"black", "fontSize":"24px", "fontFamily":"Righteous"}}>Finish</Button> 
								</div>
							</div>
						</div>	
					</div>

				</div>
			)
	}
}