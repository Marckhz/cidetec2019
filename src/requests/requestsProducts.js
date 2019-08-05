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

export { addAttributes };
export { registerInterview };
export { registerProduct };
export { getAuth };
export { getSingleProduct };	
