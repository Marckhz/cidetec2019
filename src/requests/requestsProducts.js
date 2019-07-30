function getAuth(jwt){
	return fetch(`http://127.0.0.1:5000/dashboard/`,{
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

/*
function getProducts(products){
	return fetch(`http://127.0.0.1:5000/dashboard/`,{
		method:'GET',
		body:JSON.stringify(products),
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json',
		}
	}).then(response=>{
		return response.json();
	})
}
*/

function createProduct(product_data){
	return fetch(`http://127.0.0.1:5000/create`,{
		method:'POST',
		body:JSON.stringify(product_data),
		headers:{
			'Content-Type': 'application/json',
			'Accept':'application/json'
		}		
	}).then(response=>{
		return response.json();
	})
}

function getSingleProduct(slug){
	return fetch(`http://127.0.0.1:5000/encuesta/`+slug).then(response=>{
		return response.json();
	})
}

export { getAuth };
export { getSingleProduct };	
//export { getProducts };
export { createProduct };