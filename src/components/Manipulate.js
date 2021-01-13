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

const Button = styled.button`
    margin: 0.25rem;
    padding: 0.2rem;
    width: 3.5rem;
    border: solid 1px grey;
    border-radius: 0.25rem;
    cursor:pointer;
    background-color: white;

    &:hover {
        background-color: #e1e1e1;
    }
`

// let reInc = /increment/i;
let reDec = /decrement/i;

const Manipulate = (
    { 
        label, 
        decrement, 
        length, 
        increment, 
        text,
        breakTime,
        sessionTime,
        handleDecrement,
        handleIncrement
    }) => {
    
    // Updates the timer lengths correctly using element id
    const handleClick = (event) => {
        if (reDec.test(event.target.id)) {
            handleDecrement(label);
        } else {
            handleIncrement(label);
        }        
    }

    return (
        <ManipulateTime className="manipulate-time">
            <div id={label}>{text}</div>
            <Button id={decrement} onClick={handleClick}>-</Button>
            <div id={length}>{label === 'break-label' ? breakTime : sessionTime}</div>
            <Button id={increment} onClick={handleClick}>+</Button>
        </ManipulateTime>
    );
}

export default Manipulate;