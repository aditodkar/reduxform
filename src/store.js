import { createStore } from 'redux';

import userReducer from './reducers/reducers';


const store = createStore(userReducer);

store.subscribe(() => {
	console.log('Store changed', store.getState());
})

export default store;