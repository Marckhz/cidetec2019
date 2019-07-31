import React from 'react';



import { Link } from "react-router-dom";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


export default class Empathize extends React.Component{
	constructor(props){
		super(props);
	}render(){
		return(
				<div className="container-fluid dis-col">
						<div className="row" style={{"backgroundColor":"white"}}>
							<div className="col-12 col-md-6 dis-other-col">
							<div className="row">
								<div className="col-12 col-md-8 emp-title">
									<h1> EMPHATIZE </h1>
								</div>
							</div> 
							<div className="row product-title">
								<div className="col-12 col-md-6">
									<h1>Product/Service</h1>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-12 col-md-8">
									<Paper className="table">
										<Table size="medium" padding="checkbox">
											<TableHead>
												<TableRow>
													<TableCell className="table-head"  align="center" size="small" style={{"padding":"25px", "color":"black", "fontSize":"36px", "fontFamily":"Righteous"}} >Phase</TableCell>
													<TableCell className="table-head" align="center" size="small" style={{"padding":"25px", "color":"black", "fontSize":"36px","fontFamily":"Righteous"}} >Type</TableCell>
													<TableCell className="table-head" align="center" size="small" style={{"padding":"25px", "color":"black", "fontSize":"36px", "fontFamily":"Righteous"}} >Status</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												<TableRow component="th" scope="row">
													<TableCell align="center" style={{"padding":"25px", "color":"black", "fontSize":"24px", "fontFamily":"Righteous"}} >
														<Link to="/interview" style={{"color":"#29B6F6"}}>
															E1
														</Link>
													</TableCell>
													<TableCell align="center" style={{"fontSize":"24px","fontFamily":"Righteous","color":"rgba(0,0,0,60%)"}}>
														Interview 
													</TableCell>
													<TableCell align="center">
														<Checkbox color="default" />
													</TableCell>
												</TableRow>
												<TableRow component="th" scope="row">
													<TableCell align="center" style={{"padding":"25px", "color":"black", "fontSize":"24px", "fontFamily":"Righteous"}} >
													<Link to="/derivation" style={{"color":"#29B6F6"}}>
														E2
													</Link>
													</TableCell>
													<TableCell align="center" style={{"fontSize":"24px","fontFamily":"Righteous","color":"rgba(0,0,0,60%)"}}>
														Derivation 
													</TableCell>
													<TableCell align="center">
														<Checkbox color="default"/>
													</TableCell>
												</TableRow>
												<TableRow>
													<TableCell align="center" style={{"padding":"25px", "color":"black", "fontSize":"24px", "fontFamily":"Righteous"}} >
													<Link to="/classification" style={{"color":"#29B6F6"}}>
														E3
													</Link>
													</TableCell>
													<TableCell align="center" style={{"fontSize":"24px","fontFamily":"Righteous","color":"rgba(0,0,0,60%)"}}>
														Classification 
													</TableCell>
													<TableCell align="center">
														<Checkbox color="default"/>
													</TableCell>
												</TableRow>
												<TableRow>
													<TableCell  align="center" style={{"padding":"25px", "color":"black", "fontSize":"24px", "fontFamily":"Righteous"}} >
													<Link to="/final-attributes" style={{"color":"#29B6F6"}}>
														E4
													</Link>
													</TableCell>
													<TableCell align="center" style={{"fontSize":"24px","fontFamily":"Righteous","color":"rgba(0,0,0,60%)"}}>
														Final 
													</TableCell>
													<TableCell align="center">
														<Checkbox color="default" />
													</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</Paper>
								</div>
							</div>
					</div>
					<div className="col-12 col-md-6 dis-col">
						<div className="row justify-content-center">
							<div className="col-12 col-md-6">
								<h1 style={{"marginTop":"400px", "fontSize":"48px", "textAlign":"center"}}>It is necessary to complete the four steps to continue</h1>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-12 col-md-4">
								<Button

								fullWidth={true}
								variant="contained" 
								style={{"marginTop":"50px","backgroundColor":"black", "color":"white", "fontSize":"24px", "fontFamily":"Righteous"}}>Next</Button>
							</div>
						</div>
						<div>
					</div>
				</div>
			</div>
		</div>
				

			)
	}
}
