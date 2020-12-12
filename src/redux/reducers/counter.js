import * as actionType from '../action';

const initialState = {
    counter: 0
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
        default:
            return state;
    }
}

export default reducer;