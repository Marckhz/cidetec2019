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
			'Authorization':'Bearer '+ jwt
		}
	}).then(response=>{
		return response.json()
	})
}


export { registerProduct };
export { getAuth };
export { getSingleProduct };	
