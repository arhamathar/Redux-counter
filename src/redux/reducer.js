import * as actionType from './action';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return {
            //     newState
            // }
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionType.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionType.RESET:
            return {
                ...state,
                counter: 0
            }
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    value: state.counter,
                    id: new Date()
                }) // immutable way of updating an array by adding an item.
            }
        case actionType.DEL_RESULT:
            const newArray = state.results.filter((result) => {
                return result.id !== action.delId
            })
            return {
                ...state,
                results: newArray
            }
        default:
            return state;
    }
}

export default reducer;