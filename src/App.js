import React, {Component} from 'react';
import logo from './logo.svg';

import './App.css';

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Router from './Router';

class App extends Component {

	constructor(props){
		super(props);
	}

  render(){
  	return (
  		<div>
  		{this.props.children}
  		</div>
  	);
  }
 }


export default App;
