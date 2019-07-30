/*
import * as requests from '../requests/requestsProducts';


export  function loadProducts(products){
	return {type:'LOAD_PRODUCTS', products}

}
export function loadAll(){
	return(dispatch, getState)=>{
		requests.getProducts().then(results=>{
			console.log(results)
			dispatch(loadProducts(results.docs))
		})
	}
}

export function loadSingleProduct(slug){
	return { type:'LOAD_SINGLE_PRODUCT', slug}
}

export function loadSingle(){
	return(dispatch, getState)=>{
		requests.getSingleProduct().then(results=>{
			console.log(results)
			dispatch(loadSingleProduct(results.docs))
		})
	}		
}


*/
