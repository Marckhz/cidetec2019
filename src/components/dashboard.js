import React from 'react';

import Button from '@material-ui/core/Button';


import { getProducts } from '../requests/requestsProducts';

export default class Dashboard extends React.Component{

	constructor(props){
		super(props);
		this.state ={
			products:[]
		}

		this.loadProducts()
	}

	loadProducts(){
		console.log(getProducts)
	}


	render(){
		return (
				<div>

					<div className="row">
						<div className="col-xs-12 col-md-2">
							<Button>Mis Encuestas</Button>
						</div>
						<div className="col-xs-12 col-md-2"></div>

					</div>

				</div>
			)
	}
}