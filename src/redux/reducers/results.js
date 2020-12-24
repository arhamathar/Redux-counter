import * as actionType from '../actions/action';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    value: action.result,
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