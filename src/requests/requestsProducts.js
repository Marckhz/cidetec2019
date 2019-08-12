	

function getAuth(jwt){
	return fetch(`http://127.0.0.1:5000/register_product/`,{
		method:'POST',
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json',
			'Authorization':'Bearer '+jwt
		}
	}).then(response=>{
		return response.json()
	})
}



function registerProduct(data, jwt){
	return fetch(`http://127.0.0.1:5000/register_product/`,{
		method:'POST',
		body:JSON.stringify(data),
		headers:{
			'Content-Type': 'application/json',
			'Accept':'application/json',
			'Authorization':'Bearer '+jwt
		}		
	}).then(response=>{
		return response.json();
	})
}

function getSingleProduct(slug, jwt){
	return fetch(`http://127.0.0.1:5000/emphatize/`+slug,{
		method:'GET',
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json',
			'Authorization':'Bearer '+jwt
		}
	}).then(response=>{
		return response.json()
	})
}


function registerInterview(slug, data, jwt){
	return fetch(`http://127.0.0.1:5000/emphatize/interview/`+slug,{
		method:'POST',
		body:JSON.stringify(data),
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json',
			'Authorization':'Bearer '+jwt
		}
	})
}

function addAttributes(slug, data, jwt){
	return fetch(`http://127.0.0.1:5000/emphatize/derivation/`+slug,{
		method:'POST',
		body:JSON.stringify(data),
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json',
			'Authorization':'Bearer '+jwt
		}
	})
}


function addFinalAttributes(slug, data, jwt){
	return fetch(`http://127.0.0.1:5000/emphatize/classification/`+slug,{
		method:'POST',
		body:JSON.stringify(data),
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json',
			'Authorization':'Bearer '+jwt
		}
	})
}


function addDefinitiveAttributes(slug, data, jwt){
	return fetch(`http://127.0.0.1:5000/emphatize/final_attributes/`+slug,{
		method:'POST',
		body:JSON.stringify(data),
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json',
			'Authorization':'Bearer '+jwt
		}
	})
}

function getInterview(slug, jwt){
	return fetch(`http://127.0.0.1:5000/emphatize/check/interview/`+slug,{
		method:'GET',
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json',
			'Authorization':'Bearer '+jwt
		}
	}).then(response=>{
		return response.json()
	})
}


function getDerivation(slug, jwt){
	return fetch(`http://127.0.0.1:5000/emphatize/check/derivation/`+slug,{
		method:'GET',
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json',
			'Authorization':'Bearer '+jwt
		}
	}).then(response=>{
		return response.json()
	})
}

function getClassification(slug, jwt){
	return fetch(`http://127.0.0.1:5000/emphatize/check/classification/`+slug,{
		method:'GET',
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json',
			'Authorization':'Bearer '+jwt
		}
	}).then(response=>{
		return response.json()
	})
}

function getFinal(slug, jwt){
	return fetch(`http://127.0.0.1:5000/emphatize/check/final/`+slug,{
		method:'GET',
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json',
			'Authorization':'Bearer '+jwt
		}
	}).then(response=>{
		return response.json()
	})
}

function updateClassification(slug, data, jwt){
	return fetch(`http://127.0.0.1:5000/emphatize/update/classification`+slug,{
		method:'POST',
		body:JSON.stringify(data),
		headers:{
			'Content-Type':'application/json',
			'Authorization':'Bearer '+jwt
		}
	})
}


function getAllProjects(jwt){
	return fetch(`http://127.0.0.1:5000/projects/`,{
		method:'GET',
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json',
			'Authorization':'Bearer '+jwt
		}
	}).then(response=>{
		return response.json();
	})
}


function postSurvey(slug, data, user){
	return fetch(`http://127.0.0.1:5000/surveys`+slug,{
		method:'POST',
		body:JSON.stringify(data),
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json'
		}
	})
}


export  { postSurvey };
export { addDefinitiveAttributes };
export { getAllProjects };
export { updateClassification };
export { addFinalAttributes }
export { getFinal };
export { getClassification };
export { getDerivation };
export { getInterview };
export { addAttributes };
export { registerInterview };
export { registerProduct };
export { getAuth };
export { getSingleProduct };	