import { USER_ACTION_TYPES } from './user.types'

const INITIAL_STATE = {
    currentUser: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            return state; //since the actions will fire into every reducer but switch cases will not match i.e. nothing will change here 
    }

}

//this example is how the useReducer hook was being used, but now the root-reducer will provide the dispatch 
// export const UserProviderEx = ({children}) => {
//     const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
// }