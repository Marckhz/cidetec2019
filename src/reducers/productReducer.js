export default function productReducer(state ={name:'Marco'}, action){
	switch(action.type){
		case 'LOAD_PRODUCT':
			return Object.assign({},state,{ product: action.product });
		case 'IN_LOG_OUT':
			return {};
		case 'INTERVIEW':
			return Object.assign({}, state, { product: action.interview });
		default:
			return state;
	}
}