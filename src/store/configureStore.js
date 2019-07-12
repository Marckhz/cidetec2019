import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';

import persistState from 'redux-localstorage';



import { routerReducer } from 'react-router-redux';


const enhancer = compose(
	persistState('user')
)


const rootReducer= combineReducers({
	...reducers,
	router: routerReducer
})

export default function configureStore(middleware){
	return createStore(
		rootReducer,
		compose(applyMiddleware(middleware),		
		//compose(applyMiddleware(middleware),
		enhancer)	
		);
}