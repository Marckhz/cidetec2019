function getProducts(products){
	return fetch(`http://127.0.0.1:5000/dashboard`,{
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
	return fetch("http://localhost:3000/survey/"+slug,{
		method:'GET',
		body:JSON.stringify(slug),
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json'
		}
	}).then(response=>{
		return response.json();
	})
}


export { getSingleProduct };	
export { getProducts };
export { createProduct };