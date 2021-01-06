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

let initialValue = 5;
let re = /decrement/i;

const Manipulate = ({ label, decrement, length, increment, text }) => {
    if (label === 'session-label') {
        initialValue = 25;
    }
    const [display, setDisplay] = useState(initialValue);


    const handleClick = (event) => {
        console.log(event.target.id);
        if (re.test(event.target.id) && display > 0) {
            setDisplay(display - 1);
        } else {
            setDisplay(display + 1);
        }
    }

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