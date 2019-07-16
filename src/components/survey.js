import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import { withRouter } from 'react-router-dom';
import * as actions from '../actions/productActions';


class Survey extends React.Component{
	constructor(props){
		super(props);
		const slug = props.match.params.slug;
		this.loadSingle(slug);

		this.state={
			product:{}
		}
	}

	loadSingle(slug){

	}
	render(){
		return (
				<div className="container">
					<div className="Product-title">	
					</div>
					<div className="row">
						<div className="col-xs-12 col-md-8">
							<Card className="Product-Card">
							<CardContent>
								<h1>hola mundo</h1>
								<div className="row">
									<div className="col-xs-12">
									</div>
								</div>
							</CardContent>
							</Card>
						</div>
					</div>
				</div>
			)
	}
}
export default withRouter(Survey)
