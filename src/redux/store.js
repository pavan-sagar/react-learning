import { createStore } from 'redux';
import { reducer } from '../reducers/index';
import  { render }  from '../index.js';
import { configureStore } from '@reduxjs/toolkit';


const initialState = { username : 'Pavan'};


export const store = configureStore(reducer,initialState);

