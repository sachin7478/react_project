/* The reducer: get state from store, and action from user and 
process it and updates the state */
const initilState = 12;
export const changeTheNumber = ( state = initilState, action ) => {
    switch( action.type ) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - action.payload;
        default: return state;
    }
}