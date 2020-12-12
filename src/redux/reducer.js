const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return {
                newState
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + 10
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - 10
            }
        case 'RESET':
            return {
                ...state,
                counter: 0
            }
        default:
            return state;
    }
}

export default reducer;