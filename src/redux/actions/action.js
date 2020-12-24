export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DEL_RESULT = 'DEL_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
}

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    }
}

export const storeResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

export const delResult = (res) => {
    return {
        type: DEL_RESULT,
        delId: res
    }
}