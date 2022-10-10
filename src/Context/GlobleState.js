import React, {createContext,useReducer} from "react"; 
import AppReducer from './AppReducer'

const initialState ={
 
    transitions :[]
   
 
    
}

export const GlobleContext = createContext(initialState);

export const GlobleProvider = ({children})=>{
 
    const [state,dispatch]=useReducer(AppReducer,initialState);

    initialState.length > 0 && localStorage.setItem("transition",JSON.parse(initialState))
    console.log(JSON.stringify(initialState))

    function deleteTranstions(id){
      dispatch({
        type:'DELETE_TRANSTION',
        payload:id
      });
      
    }
    function addTranstions(transition){
      dispatch({
        type:'ADD_TRANSTION',
        payload:transition
      });
      
    }
    return(<GlobleContext.Provider value={{ transitions:state.transitions,
      deleteTranstions,
      addTranstions
    }}>
    
        {children}
        </GlobleContext.Provider>)
}