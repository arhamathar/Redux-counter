import React from 'react';
import { connect } from 'react-redux';
import * as actionType from '../redux/action';
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
            <CounterControl label="Subtract 10" clicked={props.subtract} /><hr />
            <button onClick={props.storeResult}>Result</button>
            <ul>
                {(props.results).map(res => {
                    return (
                        <li key={res.id} onClick={() => props.delResult(res.id)}>
                            {res.value}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.counter,
        results: state.results
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => { dispatch({ type: actionType.INCREMENT }) },
        decrement: () => dispatch({ type: actionType.DECREMENT }),
        reset: () => dispatch({ type: actionType.RESET }),
        add: () => dispatch({ type: actionType.ADD, val: 10 }),
        subtract: () => dispatch({ type: actionType.SUBTRACT, val: 10 }),
        storeResult: () => dispatch({ type: actionType.STORE_RESULT }),
        delResult: (id) => dispatch({ type: actionType.DEL_RESULT, delId: id })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);