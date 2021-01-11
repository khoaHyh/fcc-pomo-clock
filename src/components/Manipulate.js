import { useState } from 'react';
import styled from 'styled-components';

const ManipulateTime = styled.div`
    margin: 0.75rem;
    border: solid 1px blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

let initValue = 5;
let reDecrement = /decrement/i;
let reIncrement = /increment/i;

const Manipulate = ({ label, decrement, length, increment, text, handleTime }) => {
    if (label === 'session-label') {
        initValue = 25;
    }
    const [display, setDisplay] = useState(initValue);

    const handleClick = (event) => {
        // Add conditional to only setDisplay when clock is not running
        if (reDecrement.test(event.target.id) && display > 0) {
            setDisplay(parseInt(display) - 1);
        } else if (reIncrement.test(event.target.id) & display < 60) {
            setDisplay(parseInt(display) + 1);
        }
    }

    handleTime(display);

    return (
        <ManipulateTime className="manipulate-time">
            <div id={label}>{text}</div>
            <button id={decrement} onClick={handleClick}>-</button>
            <div id={length}>{display}</div>
            <button id={increment} onClick={handleClick}>+</button>
        </ManipulateTime>
    );
}

export default Manipulate;