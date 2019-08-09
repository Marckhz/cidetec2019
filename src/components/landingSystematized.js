import React from 'react';

import processImg from '../images/stdv.jpg'

import Button from '@material-ui/core/Button';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link } from "react-router-dom";


export default class Process extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			openMenu:false,
			anchorEl:null
		}

		this.handleMenuOpen = this.handleMenuOpen.bind(this);
		this.handleCloseMenu = this.handleCloseMenu.bind(this);
}
	
	handleMenuOpen(event){
		this.setState({
			anchorEl:event.currentTarget,
			openMenu:true
		})
		console.log(this.state.setAnchorEl)
	}

	handleCloseMenu(){
		this.setState({
			openMenu:false
		})
	}

	render(){
		const {openMenu, anchorEl} = this.state
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
									aria-controls="simple-menu"
									aria-haspopup="true" 
									onClick = {this.handleMenuOpen}
									style={{"border":"5px solid", "marginTop":"25px", "fontSize":"24px", "fontFamily":"Righteous"}}
									fullWidth={true}
									color="black"
									variant="outlined"
									> Continue Process</Button>
								</div>
								<Menu id="simple-menu" anchorEl={anchorEl} keepMounted
								open={openMenu}
								onClose={this.handleCloseMenu} >
											<MenuItem onClick={this.handleCloseMenu} style={{"color":"black","fontSize":"24px", "fontFamily":"Righteous"}}>Product: Hola Mundo</MenuItem>
								</Menu>
							</div>
						</div>

			)
	}
}