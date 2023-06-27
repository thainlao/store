const defaultState = {
    cash: 5,
}


export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'add_cash':
            return {...state, cash: state.cash + action.payload}
        case 'remove_cash':
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}