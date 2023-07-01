import { act } from "react-dom/test-utils"

const defaultState = {
    customers: []
}

const add_Many_Customers = 'add_many_customers'


export const customReducer = (state = defaultState, action) => {
    switch (action.type) {
        case add_Many_Customers: 
        return {...state, customers: [...state.customers, ...action.payload]}
        case 'add_custom':
            return {...state, customers: [...state.customers, action.payload]}
        case 'remove_custom':
            return {...state, customers: state.customers.filter(customers => customers.id !== action.payload)}
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({type: 'add_custom', payload});
export const addManyCustomersAction = (payload) => ({type: add_Many_Customers, payload})