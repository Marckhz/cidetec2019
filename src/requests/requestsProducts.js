function getProducts(products){
	return fetch(`http://0.0.0.0:5000/dashboard`,{
		method:'GET',
		body:JSON.stringify(products),
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json'
		}
	}).then(response=>{
		return response.json().then(jsonR=>{
			console.log(jsonR);
		});
	})
}



function createProduct(product_data){
	return fetch(`http://0.0.0.0:5000/login`,{
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




export { getProducts };
export { createProduct };