import React from 'react';

import MyAppBar from './myappbar';

import { connect } from 'react-redux';

import { push } from 'react-router-redux';

import { logout } from '../../actions/userAction';

class Navigation extends React.Component{
	constructor(props){
		super(props);
		this.logout = this.logout.bind(this);
	}

	logout(){
		this.props.dispatch(logout());
		this.props.dispatch(push('/'))
	}
	render(){
		return<MyAppBar logout={this.logout}/>			
	}
}

function mapStateToProps(state, ownProps){
	return {
		user: state.user
	}
}


export default connect(mapStateToProps)(Navigation)