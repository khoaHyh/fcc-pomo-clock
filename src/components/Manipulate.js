import { useState } from 'react';
import styled from 'styled-components';

const ManipulateTime = styled.div`
    margin: 0.75rem;
    padding: 0.5rem;
    border: solid 1px black;
    border-radius: 0.25rem;
    background-color: #333;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 8rem;
`

let initValue;

const Manipulate = ({ label, decrement, length, increment, text }) => {
    if (label === 'session-label') {
        initValue = 25;
    } else {
        initValue = 5;
    }

    const [display, setDisplay] = useState(initValue);

    const handleDecrement = () => {
        if (display !== 1) setDisplay(parseInt(display) - 1);
    }

    const handleIncrement = () => {
        if (display !== 60) setDisplay(parseInt(display) + 1);
    }

    return (
        <ManipulateTime className="manipulate-time">
            <div id={label}>{text}</div>
            <button id={decrement} onClick={handleDecrement}>-</button>
            <div id={length}>{display}</div>
            <button id={increment} onClick={handleIncrement}>+</button>
        </ManipulateTime>
    );
}

export default Manipulate;