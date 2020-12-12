import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../components/CounterControl/CounterControl';
import CounterOutput from '../components/CounterOutput/CounterOutput';

function Counter(props) {
    return (
        <div>
            <CounterOutput value={props.count} />
            <CounterControl label="Decrement" clicked={props.decrement} />
            <CounterControl label="Increment" clicked={props.increment} />
            <CounterControl label="Reset" clicked={props.reset} />
            <CounterControl label="Add 10" clicked={props.add} />
            <CounterControl label="Subtract 10" clicked={props.subtract} />
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
        increment: () => { dispatch({ type: 'INCREMENT' }) },
        decrement: () => dispatch({ type: 'DECREMENT' }),
        reset: () => dispatch({ type: 'RESET' }),
        add: () => dispatch({ type: 'ADD' }),
        subtract: () => dispatch({ type: 'SUBTRACT' })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);