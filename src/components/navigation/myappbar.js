import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';

import LogInButton from './LoginButton';
import LogoutButton from './LogOutButton';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';


import { Link } from "react-router-dom";
import IconMenu from '../../images/iconMenu.jpg';
 


class MyAppBar extends React.Component{
	constructor(props){
		super(props);
		console.log("user props", props.user.jwt)
	
	}
	//{this.props.user.jwt ? <LogoutButton logout ={this.props.logout }/> : <LogInButton/> }

	render(){

	return(

			<AppBar style={{"backgroundColor":"black"}} position="static">
				<Toolbar >
					<img src={IconMenu} style={{"height":"100px"}}/>
				<div className="container menu-container">
					<div className="row justify-content-around row-menu">
						<div className="border-here">
							<Link className="links-navbar">
								<div className="link-btn" color="inherit">
									<h3 style={{"textAlign":"center"}}>Emphatize</h3>
								</div>
							</Link>	
						</div>
						<div className="border-here">				
							<Link className="links-navbar">
								<div className="link-btn" color="inherit">
									<h3 style={{"textAlign":"center"}}>Define</h3>
								</div>
							</Link>
						</div>
						<div className="border-here">
							<Link className="links-navbar">
								<div className="link-btn" color="inherit">
									<h3 style={{"textAlign":"center"}}>Ideate</h3>
								</div>
							</Link>
						</div>
						<div className="border-here">
							<Link className="links-navbar">
								<div className="link-btn" variant="h6" color="inherit">
									<h3 style={{"textAlign":"center"}}>Prototype</h3>
								</div>
							</Link>
						</div>
						<div className="border-here">
							<Link className="links-navbar">
								<div className="link-btn" variant="h6" color="inherit">
									<h3 style={{"textAlign":"center"}}>Test</h3>
								</div>
							</Link>
						</div>
					</div>
				</div>
					{this.props.user.jwt ?<Button style={{"marginLeft":"auto","fontFamily":"Righteous"}} onClick={this.props.logout} color="inherit"> Log Out </Button> : <Link style={{"marginLeft":"auto", "color":"white", "fontFamily":"Righteous"}} ><Button fullWidth={true }variant="outlined" color="inherit" style={{"fontFamily":"Righteous", "fontSize":"16px"}}>Sign Up </Button> </Link>}
				</Toolbar>
			</AppBar>
		);
	}
}

function mapStateToProps(state, ownProps){
	return {
		user: state.user
	}
}
export default connect(mapStateToProps)(MyAppBar);