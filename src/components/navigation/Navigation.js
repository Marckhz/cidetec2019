import React from 'react';

import MyAppBar from './myappbar';

import { connect } from 'react-redux';

import { push } from 'react-router-redux';

import { logout } from '../../actions/userAction';
import { unloadProduct } from '../../actions/productActions';

import Login from '../../components/login';



class Navigation extends React.Component{
	constructor(props){
		super(props);
		console.log("navigation props", props)
		this.logout = this.logout.bind(this);
	}

	logout(){
		this.props.dispatch(logout());
		//this.props.history.push("/")
		this.props.dispatch(unloadProduct());
		//this.props.history.push("/")
	}
	render(){
		return  <MyAppBar logout={this.logout}/>
	}
}

function mapStateToProps(state, ownProps){
	return {
		user: state.user,
		product:state.products
	}
}

export default connect(mapStateToProps)(Navigation)