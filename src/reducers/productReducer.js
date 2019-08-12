export default function productReducer(state ={name:'Marco'}, action){
	switch(action.type){
		case 'LOAD_PRODUCT':
			return Object.assign({},state,{ product: action.product });
		case 'IN_LOG_OUT':
			return {};
		case 'DERIVATION':
			return Object.assign({}, state, { derivation_attributes: action.derivation})
		case 'CLASSIFICATION':
			return Object.assign({}, state, { class_attributes: action.classification });
		default:
			return state;
	}
}