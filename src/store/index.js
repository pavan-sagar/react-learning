import { createStore } from 'redux';
import { reducer } from '../reducers/index';
import  { render }  from '../index.js';


const initialState = { username : 'Pavan'};


export const store = createStore(reducer,initialState);

