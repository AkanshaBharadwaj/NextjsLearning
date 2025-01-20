import { createStore } from 'redux'
import {applyMiddlewaremiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
// const redux=require('redux')
// import logger from 'redux-logger'
const reducer=(state={counter:0},action)=>{
 if(action.type==='increment'){
    return {
        counter:state.counter+1
    }
 }
 if(action.type==='decrement'){
    return {
        counter:state.counter-1
    }
 }
 

 return {
    counter:0
 };
}
const store=createStore(reducer)

export default store;
