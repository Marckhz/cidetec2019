function fillUserForm(survey_info){
	return fetch(`http://127.0.0.1:5000/survey/answer-survey/`+slug,{
		method:'POST',
		body:JSON.stringify(user_info),
		headers:{
			'Content-Type': 'application/json',
			'Accept':'application/json'
		}		
	}).then(response=>{
		return response.json();
	})
}


