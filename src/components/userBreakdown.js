import React from 'react';


import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';



export default class UserBreakdown extends React.Component{
	constructor(props){
		super(props);
	}render(){
		return(
				<div className="container-fluid">
					<div className="row justify-content-center">
						<div className="col-12 col-md-6">
							<div className="row justify-content-center" style={{"marginTop":"25px"}}>
								<div>
									<h1>Users breakdown</h1>
								</div>
							</div>
							<div className="row" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-6">
									<Card raised={true}>
										<CardHeader title="Must be" disableTypography={true} style={{"textAlign":"center", "fontSize":"24px"}} />
											<CardContent style={{"height":"280px"}}>
											</CardContent>
									</Card>
								</div>
								<div className="col-12 col-md-6">
									<Card raised={true}>
										<CardHeader title="Attractive" disableTypography={true} style={{"textAlign":"center", "fontSize":"24px"}}  />
											<CardContent style={{"height":"280px"}}>
											</CardContent>
									</Card>
								</div>
							</div>
							<div className="row" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-6">
									<Card raised={true}>
										<CardHeader title="One-dimensional" disableTypography={true} style={{"textAlign":"center", "fontSize":"24px"}}/>
											<CardContent style={{"height":"280px"}}>
											</CardContent>
									</Card>
								</div>
								<div className="col-12 col-md-6">
									<Card raised={true}>
										<CardHeader title="Indifferent" disableTypography={true} style={{"textAlign":"center", "fontSize":"24px"}} />
											<CardContent style={{"height":"280px"}}>
											</CardContent>
									</Card>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6">
							
						</div>
					</div>

				</div>
			)
	}
}