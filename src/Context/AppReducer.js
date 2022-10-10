export default(state,action) =>{
    switch(action.type){
        case 'DELETE_TRANSTION':
            return{
                ...state,
                transitions:state.transitions.filter(transition=>transition.id !== action.payload)
            }

            case 'ADD_TRANSTION':
            return{
                ...state,
                transitions: [action.payload,...state.transitions] 
            }
        default:
            return state;
    }
}