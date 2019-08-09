export function loadSingleProduct(product){
	console.log(product)
	return { type:'LOAD_PRODUCT', product };
}

export function unloadProduct(){
	return { type : 'IN_LOG_OUT' };
}

export function interview(interview){
	console.log("soy bool", interview)
	return { type : 'INTERVIEW', interview };
}