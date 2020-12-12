import React, { useState } from 'react';

import CounterControl from '../components/CounterControl/CounterControl';
import CounterOutput from '../components/CounterOutput/CounterOutput';

function Counter() {
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
            <CounterOutput value={count} />
            <CounterControl label="Decrement" clicked={() => counterChangedHandler('dec')} />
            <CounterControl label="Increment" clicked={() => counterChangedHandler('inc')} />
            <CounterControl label="Reset" clicked={() => counterChangedHandler('reset')} />
            <CounterControl label="Add 5" clicked={() => counterChangedHandler('add', 5)} />
            <CounterControl label="Subtract 5" clicked={() => counterChangedHandler('sub', 5)} />
        </div>
    );
}

export default Counter;