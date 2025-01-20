// import { createStore } from "redux";
const redux=require('redux');
const increment='Increment'
function incrementvalue(){
 return {
    type:increment,
    info:'First redux action'
}
}
//(prevState,action)=>newState

const initialState={
    incrementValue:1,
    

}

const reducer=(state=initialState,action)=>{
  switch(action.type){
    case increment:return {
        
        value:state.value+1
    }
    default:return state
  }
}

//store
const store=redux.createStore(reducer)
console.log(store.getState());
const unsubscribe=store.subscribe(()=>console.log("updated state",store.getState()))
store.dispatch(incrementvalue())
store.dispatch(incrementvalue());
store.dispatch(incrementvalue());
unsubscribe();

