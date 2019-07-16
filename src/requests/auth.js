
function login(credentials){
	return fetch(`http://127.0.0.1:5000/login`,{
		method:'POST',
		body: JSON.stringify(credentials),
		headers:{
			'Content-Type': 'application/json',
			'Accept':'application/json'
		}
	}).then(response=>{
		return response.json();
	})
}

function register(data){
	return fetch(`http://127.0.0.1:5000/register`,{
		method:'POST',
		body: JSON.stringify(data),
		headers:{
			'Content-Type': 'application/json',
			'Accept':'application/json'
		}
	}).then(response=>{
		return response.json();
	})
}


export { register };
export { login };