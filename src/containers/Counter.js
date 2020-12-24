import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/action';
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
            <button onClick={() => props.storeResult(props.count)}>Result</button>
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
        count: state.ctr.counter,
        results: state.res.results
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => { dispatch(actionCreators.increment()) },
        decrement: () => dispatch(actionCreators.decrement()),
        reset: () => dispatch(actionCreators.reset()),
        add: () => dispatch(actionCreators.add(10)),
        subtract: () => dispatch(actionCreators.subtract(10)),
        storeResult: (result) => dispatch(actionCreators.storeResult(result)),
        delResult: (id) => dispatch(actionCreators.delResult(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);