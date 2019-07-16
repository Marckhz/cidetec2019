export default function productReducer(state = [1], action){
	switch(action.type){
		case 'LOAD_PRODUCTS':
			return action.products;
		case 'LOAD_SINGLE_PRODUCT':
			return action.products;
		default:
			return state;
	}
}