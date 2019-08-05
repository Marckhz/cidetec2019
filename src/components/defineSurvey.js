import React from 'react';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { Modal } from '@material-ui/core';

import GroupQuestion from '../images/icons/groupQuestion.png'

import { Link } from "react-router-dom"



export default class DefineSurvey extends React.Component{
	constructor(props){
		super(props);
		
			this.state = {
				onOpen:false,
				openSend:false
			}
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.openModalSend = this.openModalSend.bind(this);
		this.closeModalSend = this.closeModalSend.bind(this);
}
	openModalSend(event){
		this.setState({
			openSend:true
		})
	}
	closeModalSend(event){
		this.setState({
			openSend:false
		})
	}
	openModal(event){
		this.setState({
			onOpen:true
		})
	}
	closeModal(event){
		this.setState({
			onOpen:false
		})
	}

	defineProfile(event){

	}


	render(){
		const {onOpen, openSend} =this.state
		return(

			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-md-6">
							<div className="row">
								<div className="col-12 col-md-8 define-title">
									<h1> DEFINE </h1>
								</div>
							</div>
							<div className="row justify-content-start interview-head">
								<div className="col-12 col-md-6">
									<h1>Define Survey </h1>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-12 col-md-8">
									<Card raised={true}>
										<CardHeader title="Question List" disableTypography={true} style={{"fontSize":"36px", "textAlign":"center"}}/>
											<CardContent style={{"height":"302px", "overflow":"auto"}}>
											</CardContent>
									</Card>
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"25px", "marginLeft":"10px"}}>
								<div className="col-12 col-md-3">
									<Button
									onClick={this.openModal} 
									variant="outlined"
									style={{"width":"150px","border":"3px solid", "fontFamily":"Righteous", "color":"#1DA1F2"}}
									>Share <Icon> share </Icon> </Button>
								</div>
								<div className="col-12 col-md-3">

									<Button
									variant="contained"
									style={{"backgroundColor":"black", "color":"white", "fontFamily":"Righteous"}}
									>Define Profile</Button>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 dis-col-def">
							<div className="row justify-content-end" style={{"marginTop":"150px"}}>
								<div className="col-12 col-md-3">
									<img src={GroupQuestion} />
								</div>
							</div>
							<div className="row justify-content-center" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-6">
									<h1>Lorem ipsum dolor sit amet consectetur adipiscing elit netu.</h1>
								</div>
							</div>
							<div className="row  justify-content-center" style={{"marginTop":"25px"}}>
								<div className="col-12 col-md-3">
									<Button
									fullWidth={true}
									style={{"backgroundColor":"black", "color":"white","fontSize":"24px", "fontFamily":"Righteous"}}
									variant="contained"
									>Next</Button>
								</div>
							</div>

						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-12 col-md-6">
								<Modal
								open={onOpen}
								onClose={this.closeModal}
								>
									<Card raised={true} style={{"margin":"auto", "marginTop":"250px","width":"25%"}}>
										<CardHeader title="The message will be send to this email" disableTypography={true} style={{"fontSize":"14px", "textAlign":"center", "marginTop":"100px"}} />
											<CardContent style={{"height":"250px"}}>
											<div className="row justify-content-center">
												<div className="col-12 col-md-10">
													<TextField fullWidth={true}
													placeholder="Email"
													/>
												</div>
												<div className="row justify-content-center">
													<div className="col-12 col-md-3">
														<Modal
														open={openSend}
														onClose={this.closeModalSend}>
															<Card style={{"margin":"auto", "marginTop":"350px", "width":"10%"}}>
																<CardContent style={{"textAlign":"center"}}>
																	<div className="row justify-content-center">
																		<p style={{"fontSize":"10px"}}> The meessage has been sent</p>
																	</div>
																	<div className="row justify-content-center">
																		<Button style={{"color":"green"}}>OK </Button>
																	</div>
																</CardContent>
															</Card>
														</Modal>
													</div>
												</div>
											</div>
											<div className="row justify-content-end">
												<div className="col-12 col-md-3">
													<Button 
													onClick={this.openModalSend}
													style={{"marginTop":"100px", "color":"green"}}>Send</Button>
												</div>
											</div>

										</CardContent>
									</Card>
								</Modal>
						</div>
					</div>

			</div>
			)
	}
}