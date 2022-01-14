import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle'

function Counter(props) {

    // const array = useState(0)
    // const count = array[0];
    // const setState = array[1]

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useDocumentTitle(`${name} is clicking ${count} times`);

    return (
        <div>
            <input type="text" onChange={e => setName(e.target.value)} />
            {name} clicked {count} times
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default Counter;