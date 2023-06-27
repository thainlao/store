import { act } from "react-dom/test-utils"

const defaultState = {
    customers: []
}
export const customReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'add_many_charecters': 
        return {...state, customers: [...state.customers, ...state.payload]}
        case 'add_custom':
            return {...state, customers: [...state.customers, action.payload]}
        case 'remove_custom':
            return {...state, customers: state.customers.filter(customers => customers.id !== action.payload)}
        default:
            return state
    }
}