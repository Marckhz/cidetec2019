import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import LogInButton from './LoginButton';
import LogoutButton from './LogOutButton';

import { connect } from 'react-redux';

class MyAppBar extends React.Component{
	constructor(props){
		super(props);
		console.log("user props", props.user.jwt)
	}

	render(){
		return(
			<AppBar color="primary" position="static">
				<Toolbar >
					<IconButton edge="start" color="inherit" aria-label="Menu">
						<MenuIcon/>
					</IconButton>
						<Typography variant="h6" color="inherit">
							Ciidetec
						</Typography>
						<div className="Session-Control" >{this.props.user.jwt ? <LogoutButton logout ={this.props.logout }/> : <LogInButton/> }</div>
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