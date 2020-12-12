import React, { useState } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../components/CounterControl/CounterControl';
import CounterOutput from '../components/CounterOutput/CounterOutput';

function Counter(props) {
    const [count, setCount] = useState(0);

    const counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                setCount(count + 1);
                break;
            case 'dec':
                setCount(count - 1)
                break;
            case 'add':
                setCount(count + value)
                break;
            case 'sub':
                setCount(count - value)
                break;
            case 'reset':
                setCount(0)
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <CounterOutput value={props.count} />
            <CounterControl label="Decrement" clicked={() => props.decrement} />
            <CounterControl label="Increment" clicked={() => props.increment} />
            <CounterControl label="Reset" clicked={() => props.reset} />
            <CounterControl label="Add 5" clicked={() => props.add} />
            <CounterControl label="Subtract 5" clicked={() => props.subtract} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.counter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        reset: () => dispatch({ type: 'RESET' }),
        add: () => dispatch({ type: 'ADD' }),
        subtract: () => dispatch({ type: 'SUBTRACT' })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);