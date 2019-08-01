import React from 'react';

import processImg from '../images/stdv.jpg'

import Button from '@material-ui/core/Button';


import { Link } from "react-router-dom";


export default class Process extends React.Component{
	constructor(props){
		super(props);

}

	render(){
		return(
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-12 col-md-8">
									<h1 style={{"marginTop":"250px", "textAlign":"center"}}>SYSTEMATIZED DESIGN THINKING</h1>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-12 col-md-8">
									<img src={processImg} />
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-12 col-md-8">
									<Link to="/registrar-producto">
										<Button style={{"backgroundColor":"black", "color":"white", "fontSize":"24px", "fontFamily":"Righteous"}} 
										fullWidth={true}
										variant="contained"
										 >Start Process</Button>
									</Link>

								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-12 col-md-8">
									<Button
									style={{"border":"5px solid", "marginTop":"25px", "fontSize":"24px", "fontFamily":"Righteous"}}
									fullWidth={true}
									color="black"
									variant="outlined"
									> Continue Process</Button>
								</div>
							</div>
						</div>

			)
	}
}